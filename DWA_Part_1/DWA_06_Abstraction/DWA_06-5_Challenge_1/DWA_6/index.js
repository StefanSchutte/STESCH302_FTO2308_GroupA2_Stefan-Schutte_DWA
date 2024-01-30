import BookList from './bookList.js';

try {
  const bookList = new BookList();
  bookList.init()
} catch (err) {
  console.error('Data retrieval failed', err);
}