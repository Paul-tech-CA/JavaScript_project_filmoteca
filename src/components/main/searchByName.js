import { languageData } from '../language-set/language-set.js';

export default {
  key: 'c1bc6964ae67d43eb6945614299c385c',
  searchFilms (searchQuery, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=${languageData.fetchLanguage}&query=${searchQuery}&page=${page}&include_adult=false`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data);
  },
};
