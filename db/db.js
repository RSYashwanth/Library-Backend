const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'librarydb',
    password: 'AA123@gmail.com',
    port: 9881,
});

module.exports = { pool };
