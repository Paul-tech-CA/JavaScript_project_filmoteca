refs = {
  linkHome: document.querySelector('.home-js'),
  linkLibrary: document.querySelector('.library-js'),
  inputForm: document.querySelector('.search-form'),
  buttonWatch: document.querySelector('.button.watch'),
  buttonQueue: document.querySelector('.button.queue'),
  headerBcg: document.querySelector('.page-header'),
  languageSet: document.querySelector('.theme-switch__control'),
};

refs.linkHome.addEventListener('click', homeRender);

refs.linkLibrary.addEventListener('click', libRender);

function libRender (event) {
  refs.linkHome.classList.remove('current');
  refs.linkLibrary.classList.add('current');
  refs.inputForm.classList.add('is-hidden');
  refs.buttonQueue.classList.remove('is-hidden');
  refs.buttonWatch.classList.remove('is-hidden');
  refs.headerBcg.classList.add('lib-bcg');
  refs.headerBcg.classList.remove('modal-bcg');
}

function homeRender (event) {
  refs.linkHome.classList.add('current');
  refs.linkLibrary.classList.remove('current');
  refs.inputForm.classList.remove('is-hidden');
  refs.buttonQueue.classList.add('is-hidden');
  refs.buttonWatch.classList.add('is-hidden');
  refs.headerBcg.classList.remove('lib-bcg');
  refs.headerBcg.classList.remove('modal-bcg');
}
