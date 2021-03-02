import { apiMovieCard } from '../movieCard/movieCard.js';
const inputFormRef = document.querySelector('.search-form');
const buttonWatchRef = document.querySelector('.button.watch');
const buttonQueueRef = document.querySelector('.button.queue');
const headerBcgRef = document.querySelector('.page-header');

const refs = {
  ul: document.querySelector('.film-list'),
};

function imgOpen(event) {
  if (event.target.parentNode.nodeName !== 'LI') {
    return;
  }
  let id = event.target.parentNode.dataset.id;
  apiMovieCard(id);
  inputFormRef.classList.add('is-hidden');
  buttonWatchRef.classList.add('is-hidden');
  buttonQueueRef.classList.add('is-hidden');
  headerBcgRef.classList.add('modal-bcg');
}

refs.ul.addEventListener('click', imgOpen);

function addBoxShadow(event) {
  if (event.target.parentNode.nodeName !== 'LI') {
    return;
  }
  event.target.parentNode.classList.add('box-shadow');
}
function removeBoxShadow(event) {
  event.target.parentNode.classList.remove('box-shadow');
}
refs.ul.addEventListener('mouseover', addBoxShadow);
refs.ul.addEventListener('mouseout', removeBoxShadow);

export default imgOpen;
