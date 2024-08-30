const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'librarydb',
    password: 'AA123@gmail.com',
    port: 5432,
});

module.exports = { pool };
