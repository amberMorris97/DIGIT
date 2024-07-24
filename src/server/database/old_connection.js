const { Pool } = require('pg');

const pool = new Pool({
  user: 'ambermorris',
  host: 'localhost',
  database: 'diggit_users',
  password: 'your_password',
  port: 5432,
});

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
  )
`;

const createUserTable = async () => {
  try {
    const client = await pool.connect();
    await client.query(createUserTableQuery);
    client.release();
    console.log('Users table created successfully')
  } catch (error) {
    console.error('ERROR creating user: ', error);
    throw error;
  }
 }

 module.exports = { pool };


