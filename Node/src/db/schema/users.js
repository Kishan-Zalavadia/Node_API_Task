const { pgTable, integer, varchar,serial } = require('drizzle-orm/pg-core')

const users = pgTable('users', {
  userId: serial().primaryKey().notNull(),
  name: varchar({ length: 15 }),
  email: varchar({ length: 30 }).notNull(),
  password: varchar({ length: 65 }).notNull(),
})

const address = pgTable('address', {
  addressId: integer().primaryKey().generatedByDefaultAsIdentity({startWith: 1,increment: 1,}),
  street: varchar({ length: 30 }),
  city: varchar({ length: 20 }),
  state: varchar({ length: 20 }),
});

const name = pgTable('name', {
  nameId: integer().primaryKey().generatedByDefaultAsIdentity({startWith: 1,increment: 1,}),
  first_name: varchar({ length: 30 }),
  last_name: varchar({ length: 20 }),
});

module.exports = { users, address, name};