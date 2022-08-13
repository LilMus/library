let myLibrary = [];
const main = document.querySelector('main');
const btnRead = document.querySelector('.btn-read');

function Book(_title, _author, _pages, _read) {
  this.title = _title;
  this.author = _author;
  this.pages = _pages;
  this.read = _read;
}

const book1 = new Book('Title', 'Author', 256, true);

const addBookToLibrary = (book) => myLibrary.push(book);

const addCardToLibrary = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const book of myLibrary) {
    main.innerHTML += `<div class="card">
        <div class="card-container">
          <div class="card-top">
            <h2 class="title">${book.title}</h2>
            <p class="author">${book.author}</p>
          </div>
          <div class="card-bottom">
            <p class="pages">${book.pages} pages</p>
            <button type="button" class="btn-read">READ</button>
            <button type="button" class="btn-remove">REMOVE</button>
          </div>
        </div>
      </div>
          `;
  }
};

addBookToLibrary(book1);
addCardToLibrary();
