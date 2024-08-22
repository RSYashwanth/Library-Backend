const { pool } = require('../db/db');

const addBook = async (bookTitle) => {
    const query = 'INSERT INTO books (TITLE, OWNER) VALUES ($1, $2)';
    await pool.query(query, [bookTitle, "Library"]);
};

const getAllBooks = async () => {
    const query = 'SELECT * FROM books';
    const response = await pool.query(query);
    return response.rows;

};

const getNumBooks = async () => {
    const query = 'SELECT COUNT(*) FROM books';
    const response = await pool.query(query);
  
    result = response.rows[0];
    return result.count;
}

const issueBook = async (id, newOwner) => {
    const query = 'UPDATE books SET OWNER = $1, DATE = CURRENT_DATE WHERE ID = $2';
    await pool.query(query, [newOwner, id]);
}

module.exports = {
    addBook,
    getAllBooks,
    getNumBooks,
    issueBook
};
