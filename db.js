const { Pool } = require("pg");

// On Render, use the Internal Database URL when the API and database are in the
// same region. For an External URL (or a local test against Render), set
// DATABASE_SSL=true in the environment.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
