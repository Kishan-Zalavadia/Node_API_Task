CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(15),
	"email" varchar(30) NOT NULL,
	"password" varchar(65) NOT NULL
);
