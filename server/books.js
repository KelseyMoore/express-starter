const bookList = require('../data/books.json');

const books = {
  getAll: (req, res) => {
    if (bookList) {
      return res.status(200).send(bookList);
    } else {
      return res.sendStatus(404);
    }
  },

  getByAuthor: (req, res) => {
    const books = bookList.filter(b => b.AuthorId == req.params.id);
    if (books && books.length) {
      return res.status(200).send(books);
    } else {
      return res.sendStatus(404);
    }
  },

  getById: (req, res) => {
    const book = bookList.filter(b => b.Id == req.params.id);
    if (book && book.length) {
      return res.status(200).send(book);
    } else {
      return res.sendStatus(404);
    }
  }
};

module.exports = books;
