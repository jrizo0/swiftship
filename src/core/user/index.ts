import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { useTransaction } from "@/lib/utils/transaction";
import { zod } from "@/lib/utils/zod";
import { user } from "./user.sql";

export const InsertSchema = createInsertSchema(user);
export type InsertSchema = z.infer<typeof InsertSchema>;

export const SelectSchema = createSelectSchema(user);
export type SelectSchema = z.infer<typeof SelectSchema>;

export const fromID = zod(SelectSchema.shape.id, (id) =>
  useTransaction(async (tx) =>
    tx.query.user.findFirst({ where: (user, { eq }) => eq(user.id, id) }),
  ),
);
