const { pool } = require('../db/db');

const addUser = async (username, hashedPassword) => {
    const query = 'INSERT INTO users (USERNAME, PASSWORD, ADMIN) VALUES ($1, $2, $3)';
    const numUsers = (await pool.query("SELECT COUNT(*) FROM users")).rows[0].count;
    await pool.query(query, [username, hashedPassword, numUsers == '1']);
};

const getUserByName = async (username) => {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);
    return result.rows[0];
};

const getNumUsers = async () => {
    const query = 'SELECT COUNT(*) FROM users';
    const response = await pool.query(query);

    result = response.rows[0];
    return result.count;
}

const getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const response = await pool.query(query);

    result = '';
    response.rows.forEach(row=>{
      result += JSON.stringify(row) + '||';
    });
    return result;
}

const makeAdmin = async (username) => {
    const query = "UPDATE users SET ADMIN='t' WHERE username = $1";
    await pool.query(query, [username]);
}

module.exports = {
    addUser,
    getUserByName,
    getAllUsers,
    getNumUsers,
    makeAdmin
};
