import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const address = pgTable("address", {
	addressId: integer().primaryKey().generatedByDefaultAsIdentity({ name: "address_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	street: varchar({ length: 30 }),
	city: varchar({ length: 20 }),
	state: varchar({ length: 20 }),
});

export const name = pgTable("name", {
	nameId: integer().primaryKey().generatedByDefaultAsIdentity({ name: "name_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	firstName: varchar("first_name", { length: 30 }),
	lastName: varchar("last_name", { length: 20 }),
});

export const users = pgTable("users", {
	userId: serial().primaryKey().notNull(),
	name: varchar({ length: 15 }),
	email: varchar({ length: 30 }).notNull(),
	password: varchar({ length: 65 }).notNull(),
});
