import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";

export { createId } from "@paralleldrive/cuid2";
export const cuid = (name: string) => text(name, { length: 26 });
export const id = {
  get id() {
    return cuid("id").primaryKey().notNull();
  },
};

export const timestamps = {
  timeCreated: text("time_created", { length: 25 })
    .notNull()
    .default(sql`(current_timestamp)`),
  timeUpdated: text("time_updated", { length: 25 })
    .notNull()
    .default(sql`(current_timestamp)`),
  timeDeleted: text("time_deleted", { length: 25 }).default(sql`(NULL)`),
};

/*
const blob = <TData>(name: string) =>
  customType<{ data: TData; driverData: Buffer }>({
    dataType() {
      return "jsonb";
    },
    toDriver(value: TData): string {
      return JSON.stringify(value);
    },
  })(name);
*/
