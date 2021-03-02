import filmTpl from '../../templates/movies.hbs';
import one from '../../templates/firstPage.hbs';
import multi from '../../templates/mulltipage.hbs';

const refs = {
  galleryCont: document.querySelector('.film-list'),
};
let page = 1;
let baseUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=c1bc6964ae67d43eb6945614299c385c&page=`;

insertItems();

function insertItems() {
  fetch(baseUrl + page)
    .then(res => res.json())
    .then(data => {
      const markup = data.results.map(item => filmTpl(item)).join('');
      refs.galleryCont.innerHTML = markup;
      console.log(page);
    });
}

let pageDiv = document.querySelector('#pagDiv');

function pagMarkup() {
  if (page === 1) {
    pageDiv.innerHTML = one();
  }
  if (page > 1) {
    pageDiv.innerHTML = multi();
    let decPage = document.querySelector('#dec');
    decPage.addEventListener('click', decrement);
  }
}
pagMarkup();

let incPage = document.querySelector('#inc');
incPage.addEventListener('click', increment);

function increment() {
  page += 1;
  insertItems();
  pagMarkup();
  let incPage = document.querySelector('#inc');
  incPage.addEventListener('click', increment);
}

function decrement() {
  if (page > 1) {
    page -= 1;
    insertItems();
  }
}

