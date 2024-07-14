// import { relations } from "drizzle-orm";
import { primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { id, timestamps } from "@/lib/db/utils";

export const user = sqliteTable(
  "users",
  {
    ...id,
    clerkID: text("clerk_id", { length: 255 }).notNull(),
    email: text("email", { length: 255 }).unique().notNull(),
    name: text("name", { length: 255 }).notNull(),
    ...timestamps,
  },
  (table) => ({
    primary: primaryKey({
      columns: [table.id],
    }),
  }),
);

// export const userRelations = relations(user, ({ many }) => ({
//   groups: many(userToGroup),
// }));
