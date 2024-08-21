const express = require('express');
const bookController = require('../controllers/BookController');
const { authenticate } = require('../auth/auth');

const router = express.Router();

router.post('/addBook', authenticate, bookController.addBook);
router.post('/issueBook', authenticate, bookController.issueBook);
router.get('/books', authenticate, bookController.getAllBooks);
router.get('/books/user', authenticate, bookController.getBooks);
router.get('/books/available', authenticate, bookController.getAvailableBooks);
router.get('/books/num', authenticate, bookController.getNumBooks);

module.exports = router;
