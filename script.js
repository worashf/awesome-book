const listBook = document.getElementById('book-list');
const addForm = document.getElementById('add-form');
const title = document.getElementById('title');
const author = document.getElementById('author');

const getBooks = () => {
  let books;

  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

const addBookToStorage = (book) => {
  const storedBooks = getBooks();
  storedBooks.push(book);
  localStorage.setItem('books', JSON.stringify(storedBooks));
};

const displayBooks = () => {
  const bookList = getBooks();
  let bookDiv = '';
  if (bookList.length !== 0 && bookList) {
    bookList.forEach((book, index) => {
      bookDiv += `
                <div class="book">
                <div class="form-group>
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                  </div>
                <button type="button" id="remove-btn"  onClick='removeBook(${index})'> Remove </button>
                 <div class="line"> </div>
                </div>`;
    });
    listBook.innerHTML = bookDiv;
  } else {
    bookDiv += `
          <div class="book">
          <p class="book-message"> No book Available<p>
          </div> `;
    listBook.innerHTML = bookDiv;
  }
};
const addBook = (title, author) => {
  if (title && author) {
    const book = {
      title,
      author,
    };
    addBookToStorage(book);
    displayBooks();
  }
};
const removeBook = (index) => {
  const books = JSON.parse(localStorage.getItem('books'));
  const filteredBook = books.filter((book, i) => index !== i);
  localStorage.setItem('books', JSON.stringify(filteredBook));
  displayBooks();
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if ((title.value.trim !== '') && (author.value.trim !== '')) {
    addBook(title.value, author.value);
    title.value = '';
    author.value = '';
  }
});
removeBook();
displayBooks();
