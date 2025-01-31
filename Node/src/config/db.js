// const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
  console.log('connected to the db')
})

const executeQuery = (query, values = []) => {
  return pool.query(query, values)
}

module.exports = executeQuery
