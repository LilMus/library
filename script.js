/* eslint-disable no-restricted-syntax */
let myLibrary = [];
const main = document.querySelector('main');
const btnRead = document.querySelector('.btn-read');
const addBook = document.querySelector('header > button');
const formSection = document.querySelector('.form-section');
const blurredElt = Array.from(
  document.querySelectorAll('body > *:not(.form-section, script)')
);
let isFormDisplayed = false;

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
    formSection.style.display = 'none';
    unblurElt();
    isFormDisplayed = false;
  }
};

addBook.addEventListener('click', displayForm);
formSection.addEventListener('click', (event) => {
  if (event.target === formSection) {
    hideForm();
  }
});

addBookToLibrary(book1);
addCardToLibrary();
