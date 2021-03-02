import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import debounce from 'lodash/debounce';
import search from './searchByName.js';
import { insertItems, page } from '../popularMovies/fetch.js';
import { languageData } from '../language-set/language-set.js';

export const refs = {
  galleryCont: document.querySelector('.film-list'),
  searchForm: document.querySelector('#search-form'),
  input: document.querySelector('.search-form-input'),
  key: 'c1bc6964ae67d43eb6945614299c385c',
};

function searchPrint(event) {
  event.preventDefault();

  const letterNumber = /^[0-9a-zA-Zа-яА-Я]+$/;
  if (!refs.input.value.match(letterNumber) && languageData.language === 'EN') {
    error({
      title: 'Wrong input.',
      text: 'The field may contain letters and numbers only.',
      delay: 3000,
      closerHover: true,
    });
    return;
  } else if (
    !refs.input.value.match(letterNumber) &&
    languageData.language === 'RU'
  ) {
    error({
      title: 'Неверный ввод.',
      text: 'Поле может содержать только буквы и цифры.',
      delay: 3000,
      closerHover: true,
    });
    return;
  }

  search.searchFilms(refs.input.value, page).then(data => insertItems(data));
}

refs.searchForm.addEventListener('submit', searchPrint);
refs.input.addEventListener('input', debounce(searchPrint, 500));
