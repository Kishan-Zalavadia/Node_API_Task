// import { defineConfig } from "drizzle-kit";
// import 'dotenv/config';

// export default defineConfig({
//     dialect: "postgresql",
//     schema: "./src/db/schema/users.js",
//     out: "./src/drizzle/migrations",
//     driver: "pg",
//     dbCredentials: {
//         url: process.env.DATABASE_URL,
//     }
// })
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
    out: "./drizzle",
    dialect: "postgresql",
    schema: "./src/db/schema/users.js",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});