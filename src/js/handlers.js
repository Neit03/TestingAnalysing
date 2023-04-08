import { checkAnswer } from './check-function';
import { refs } from './refs';
import { onModalOpen } from './modal';
import Notiflix from 'notiflix';
import { state } from './state';
export function onBtnCheckClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (
    refs.selectQuestionFirst.value === '' ||
    refs.selectQuestionSecond.value === '' ||
    refs.selectQuestionThird.value === '' ||
    refs.selectQuestionFourth.value === '' ||
    refs.selectQuestionFifth.value === '' ||
    refs.selectQuestionSixth.value === '' ||
    refs.selectQuestionSeventh.value === '' ||
    refs.selectQuestionEighth.value === '' ||
    refs.selectQuestionNinth.value === '' ||
    refs.selectQuestionTenth.value === ''
  ) {
    Notiflix.Notify.warning('Fill in all fields');
    return;
  }

  refs.rules.forEach(el => {
    el.classList.add('is-visible');
  });

  if (event.target.innerText === 'Check answers') {
    checkAnswer();
    onModalOpen();
  }

  if (event.target.innerText === 'Try again') {
    event.currentTarget.reset();
    refs.resultWrap.classList.add('visually-hidden');
    state.totalResult = 0;
    refs.rules.forEach(el => {
      el.classList.remove('is-visible');
    });
    refs.generalSelect.forEach(el => {
      el.classList.add('start-value');
    });
    refs.answerText.forEach(el => {
      el.classList.add('visually-hidden');
    });
  }
}
