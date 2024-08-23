const Book = require('../models/Book');

const getBooks = async (req, res) => {
    try {
        const username = req.params.username;
        if(!username) {
            res.status(400).json({error:"Fields cannot be null"});
            return;
        }
        let books = await Book.getAllBooks();
        result = []; 
        books.forEach( book => {
            if (book.owner === username) {
                result.push(book);
            }
        });
        toRet = '';
        result.forEach( row => {
            toRet += JSON.stringify(row) + '||';
        });
        res.end(toRet);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

const getAvailableBooks = async (_req, res) => {
    try {
        let books = await Book.getAllBooks();
        result = []; 
        books.forEach( book => {
            if (book.owner === 'Library') {
                result.push(book);
            }
        });
        toRet = '';
        result.forEach( row => {
            toRet += JSON.stringify(row) + '||';
        });
        res.end(toRet);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

const addBook = async (req, res) => {
    try {
        const { title } = req.body;
        if(!title) {
            res.status(400).json({error:"Title cannot be null"});
            return;
        }
        await Book.addBook(title);
        res.status(200).json({message:"Added book: "+title+" successfully"});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

const issueBook = async (req, res) => {
    try {
        const { id, username } = req.body;
        if(!id || !username) {
            res.status(400).json({error:"All fields are required"});
            return;
        }
        await Book.issueBook(id, username);
        res.status(200).json({message:"Issued book to "+username+" successfully"});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

const getAllBooks = async (_req, res) => {
    try {
        let books = await Book.getAllBooks();
        result = '';
        books.forEach( row => {
            result += JSON.stringify(row) + '||';
        });
        res.end(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

const getNumBooks = async (_req, res) => {
    try {
        res.end(await Book.getNumBooks());
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports = {
    getBooks, 
    addBook,
    issueBook,
    getAllBooks,
    getNumBooks,
    getAvailableBooks
}
