const { pool } = require('../db/db');

const addBook = async (bookTitle) => {
    const query = 'INSERT INTO books (name) VALUES ($1)';
    await pool.query(query, [bookTitle]);
};

const getAllBooks = async () => {
    const query = 'SELECT * FROM books';
    const response = await pool.query(query);
    result = '';
    response.rows.forEach(row=>{
      result += JSON.stringify(row) + '||';
    });
    return result;

};

module.exports = {
    addBook,
    getAllBooks
};