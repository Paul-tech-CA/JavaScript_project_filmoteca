const refLanguageSet = document.querySelector('.theme-switch__toggle');
const refEnglish = document.querySelectorAll('.english');
const refRussian = document.querySelectorAll('.russian');
const input = document.querySelector('.search-form > input');

const savedLanguage = localStorage.getItem('language');
export const languageData = JSON.parse(savedLanguage) || {
  language: 'EN',
  fetchLanguage: 'en-EN',
};

function setLanguage () {
  if (languageData.language === 'EN') {
    refRussian.forEach(e => {
      e.classList.add('is-hidden');
      input.placeholder = 'Movie search';
      refLanguageSet.checked = false;
    });
  } else if (languageData.language === 'RU') {
    refEnglish.forEach(e => {
      e.classList.add('is-hidden');
      input.placeholder = 'Поиск фильмов';
      refLanguageSet.checked = true;
    });
  }
}

function changeLanguage (event) {
  if (languageData.language === 'EN') {
    refRussian.forEach(e => {
      e.classList.remove('is-hidden');
    });
    refEnglish.forEach(e => {
      e.classList.add('is-hidden');
    });
    input.placeholder = 'Поиск фильмов';
    languageData.language = 'RU';
    languageData.fetchLanguage = 'ru-RU';
    localStorage.setItem('language', JSON.stringify(languageData));
    location.reload();
  } else if (languageData.language === 'RU') {
    refRussian.forEach(e => {
      e.classList.add('is-hidden');
    });
    refEnglish.forEach(e => {
      e.classList.remove('is-hidden');
    });
    input.placeholder = 'Movie search';
    languageData.language = 'EN';
    languageData.fetchLanguage = 'en-US';
    localStorage.setItem('language', JSON.stringify(languageData));
    location.reload();
  }
}

setLanguage();
refLanguageSet.addEventListener('click', changeLanguage);
