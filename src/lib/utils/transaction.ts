import { ResultSet } from "@libsql/client";
import { ExtractTablesWithRelations } from "drizzle-orm";
import { SQLiteTransaction } from "drizzle-orm/sqlite-core";

import { Context } from "./context2";
import { db } from "../db";
import { schema } from "../db/schema";

export type Transaction = SQLiteTransaction<
  "async",
  ResultSet,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
>;

type TxOrDb = Transaction | typeof db;

const TransactionContext = Context.create<{
  tx: TxOrDb;
  effects: (() => void | Promise<void>)[];
}>("TransactionContext");

export async function useTransaction<T>(callback: (trx: TxOrDb) => Promise<T>) {
  try {
    const { tx } = TransactionContext.use();
    return callback(tx);
  } catch {
    return callback(db);
  }
}

export async function createTransactionEffect(
  effect: () => any | Promise<any>,
) {
  try {
    const { effects } = TransactionContext.use();
    effects.push(effect);
  } catch {
    await effect();
  }
}

export async function createTransaction<T>(
  callback: (tx: TxOrDb) => Promise<T>,
) {
  try {
    const { tx } = TransactionContext.use();
    return callback(tx);
  } catch {
    const effects: (() => void | Promise<void>)[] = [];
    const result = await db.transaction(
      async (tx) => {
        const result = await TransactionContext.with(
          { tx, effects },
          async () => {
            return callback(tx);
          },
        );
        return result;
      },
      {
        behavior: "exclusive",
      },
    );
    await Promise.all(effects.map((x) => x()));
    return result;
  }
}
