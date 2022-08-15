/* eslint-disable no-restricted-syntax */
let myLibrary = [];
const main = document.querySelector('main');
const btnRead = document.querySelector('.btn-read');
const addBook = document.querySelector('header > button');
const formSection = document.querySelector('.form-section');
const form = document.querySelector('form');
const blurredElt = Array.from(
  document.querySelectorAll('body > *:not(.form-section, script)')
);
let isFormDisplayed = false;
let bookTitle = document.querySelector('#title');
let bookAuthor = document.querySelector('#author');
let bookPages = document.querySelector('#pages');
let bookRead = document.querySelector('#read-checkbox');
const formAddBookBtn = document.querySelector('.form-container > button');

function Book(_title, _author, _pages, _read) {
  this.title = _title;
  this.author = _author;
  this.pages = _pages;
  this.read = _read;
}

const addBookToLibrary = (book) => myLibrary.push(book);

const addCardToLibrary = () => {
  // eslint-disable-next-line no-restricted-syntax
  main.innerHTML = '';
  for (const book of myLibrary) {
    let status = 'unread';
    if (book.read) {
      status = 'read';
    }
    main.innerHTML += `<div class="card">
        <div class="card-container">
          <div class="card-top">
            <h2 class="title">${book.title}</h2>
            <p class="author">${book.author}</p>
          </div>
          <div class="card-bottom">
            <p class="pages">${book.pages} pages</p>
            <button type="button" class="btn-read ${status}">${status}</button>
            <button type="button" class="btn-remove">REMOVE</button>
          </div>
        </div>
      </div>
          `;
  }
};

const blurElt = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const blurredElts of blurredElt) {
    blurredElts.classList.add('blurred');
  }
};

const unblurElt = () => {
  for (const blurredElts of blurredElt) {
    blurredElts.classList.remove('blurred');
  }
};

const displayForm = () => {
  formSection.style.display = 'flex';
  blurElt();
  isFormDisplayed = true;
};

const hideForm = () => {
  if (isFormDisplayed) {
    unblurElt();
    isFormDisplayed = false;
    form.reset();
    formSection.style.display = 'none';
  }
};

addBook.addEventListener('click', displayForm);
formSection.addEventListener('click', (event) => {
  if (event.target === formSection) {
    console.log('oe');
    hideForm();
  }
});

formAddBookBtn.addEventListener('click', () => {
  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked
  );
  addBookToLibrary(book);
  addCardToLibrary();
  hideForm();
});
