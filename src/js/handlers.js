import Notiflix from 'notiflix';
import { checkAnswer } from './check-function';
import { refs } from './refs';

export function onBtnCheckClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (
    refs.selectQuestionFirst.value === '' ||
    refs.selectQuestionSecond.value === '' ||
    refs.selectQuestionThird.value === ''
  ) {
    Notiflix.Notify.warning('Fill in all fields');
    return;
  }

  refs.ruleses.forEach(el => {
    el.classList.add('is-visible');
  });

  checkAnswer();
}

// Notiflix.Notify.info('Cogito ergo sum');
// parentElement;
// childNodes;
// childNodes;

// div.question - content;
// const userId = event.target.closest('.users-item').dataset.id;
