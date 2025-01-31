// import { pgTable, unique, integer, varchar } from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
//     id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1, increment: 1 }),
//     name: varchar({ length: 50 }),
//     email: varchar({ length: 50 }).unique(),
//     password: varchar({ length: 65 }),
// })

const { pgTable, integer, varchar } = require('drizzle-orm/pg-core')

const users = pgTable('users', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({
    name: 'user_id_seq',
    startWith: 2,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1
  }),
  name: varchar({ length: 15 }),
  email: varchar({ length: 30 }).notNull(),
  password: varchar({ length: 65 }).notNull(),
  city: varchar({ length: 20 })
})

const address = pgTable("address", {
    id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "address_id_seq", startWith: 2, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
    street: varchar({ length: 20 }),
    city: varchar({ length: 20 }),
    state: varchar({ length: 20 }),
    zip: varchar({ length: 10 }),
});

module.exports = {users, address};
