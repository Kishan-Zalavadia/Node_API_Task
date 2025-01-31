import { pgTable, integer, varchar } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const users = pgTable('users', {
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
