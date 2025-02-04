const { drizzle } = require('drizzle-orm/node-postgres')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

const db = drizzle(process.env.DATABASE_URL);

module.exports = db