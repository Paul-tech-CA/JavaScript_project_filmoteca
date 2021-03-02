import { languageData } from '../language-set/language-set.js';
import makskazachuk from '../../images/team/makskazachuk.jpg';
import paul from '../../images/team/paul.jpg';
import dima_orgish from '../../images/team/dima_orgish.jpg';
import dimaGrinchenko from '../../images/team/dimaGrinchenko.jpg';
import maks from '../../images/team/maks.jpg';
import zheka from '../../images/team/zheka.jpg';
import vova from '../../images/team/vova.jpg';
import stas from '../../images/team/stas.jpg';

const students = document.querySelector('.footer-description__link');
const main = document.querySelector('.main-cont');
const body = document.querySelector('body');

students.addEventListener('click', openModal);

const createDevelopers = () => {
  let markup = '';
  if (languageData.language === 'EN') {
    markup = `<div class='overlay'>
    <div class='modal'>
        <h2 class='our-team__name'>Development team</h2>
            <ul class='modalWindow-list'>
            <li class='modalWindow-item'>
                <img 
                src=${makskazachuk} 
                alt="Team lead picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Maxim Kazachuk </h3><span class='our-team__position'>Team lead</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${paul} 
                alt="Scrum Master picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Pavlo Sakun </h3><span class='our-team__position'>Scrum Master</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${dima_orgish} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Dmitry Orgish </h3><span class='our-team__position'>Teammate</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${dimaGrinchenko} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Dmitriy Grinchenko </h3><span class='our-team__position'>Teammate</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${maks} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Maksym Tuhanov </h3><span class='our-team__position'>Teammate</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${zheka} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Evgeniy Serebrennikov </h3><span class='our-team__position'>Teammate</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${vova} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Vova Chelidze </h3><span class='our-team__position'>Teammate</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${stas} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Stanislav Karasyk </h3><span class='our-team__position'>Teammate</span></li>
                </ul>
        <button class='button-footer button is-active'>Close</button>
        </div>
    </div>`;
  }
  if (languageData.language === 'RU') {
    markup = `<div class='overlay'>
    <div class='modal'>
        <h2 class='our-team__name'>Команда разработчиков</h2>
            <ul class='modalWindow-list'>
            <li class='modalWindow-item'>
                <img 
                src=${makskazachuk} 
                alt="Team lead picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Максим Казачук </h3><span class='our-team__position'>Лидер команды</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${paul} 
                alt="Scrum Master picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Павел Сакун </h3><span class='our-team__position'>Скрам мастер</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${dima_orgish} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Дмитрий Оргиш </h3><span class='our-team__position'>Разработчик</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${dimaGrinchenko} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Дмитрий Гринченко </h3><span class='our-team__position'>Разработчик</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${maks} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Максим Туганов </h3><span class='our-team__position'>Разработчик</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${zheka} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Евгений Серебренников </h3><span class='our-team__position'>Разработчик</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${vova} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Вова Челидзе </h3><span class='our-team__position'>Разработчик</span></li>
                <li class='modalWindow-item'>
                <img 
                src=${stas} 
                alt="Teammate picture"
                class="our-team__picture"
                width="150"
                height="150"
                /><h3 class='teammates-name'>Станислав Карасик </h3><span class='our-team__position'>Разработчик</span></li>
                </ul>
        <button class='button-footer button is-active'>Закрыть</button>
        </div>
    </div>`;
  }

  main.insertAdjacentHTML('beforeend', markup);
};

function openModal (event) {
  event.preventDefault();
  createDevelopers();

  const modalWindowRef = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  overlay.style.display = 'block';
  body.style.overflow = 'hidden';

  modalWindowRef.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
      overlay.remove();
      body.style.overflow = 'unset';
    }
  });

  body.addEventListener('keydown', escHandler);

  function escHandler (event) {
    if (event.code === 'Escape') {
      overlay.remove();
      body.style.overflow = 'unset';
      body.removeEventListener('keydown', escHandler);
    }
  }
}
