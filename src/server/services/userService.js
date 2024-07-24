// const { pool } = require('../database/connection');

async function fetchUser(email) {
  const query = `
   SELECT * FROM users WHERE email = $1
  `;

  try {
    const client = await pool.connect();
    const result = await client.query(query, [email]);
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

async function createUser(email) {
  const query = `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    RETURNING *
  `;

  try {
    const client = await pool.connect();
    const result = await client.query(query, ['test', email]);
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('ERROR creating user: ', error);
  }
 }

 module.exports = {
  createUser,
  fetchUser,
 };