function removeLoader () {
  const mainRef = document.querySelector('.loader');
  mainRef ? mainRef.classList.add('is-hiden') : '';
}

export default removeLoader;
