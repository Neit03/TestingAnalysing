import {
  checkAnswer,
  checkElContainsClass,
  elementsAddClass,
  elementsRemoveClass,
} from './check-function';
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

  elementsAddClass(refs.rules, 'is-visible');
  // refs.rules.forEach(el => {
  //   el.classList.add('is-visible');
  // });

  if (event.target.innerText === 'Check answers') {
    checkElContainsClass(refs.generalSelect, 'uncorrect-value');
    checkElContainsClass(refs.generalSelect, 'correct-value');

    checkAnswer();
    onModalOpen();

    checkElContainsClass(refs.answerText, 'is-hidden');
    checkElContainsClass(refs.generalSelect, 'start-value');
  }

  if (event.target.innerText === 'Try again') {
    event.currentTarget.reset();
    refs.resultWrap.classList.add('is-hidden');
    state.totalResult = 0;

    elementsRemoveClass(refs.rules, 'is-visible');

    elementsAddClass(refs.generalSelect, 'start-value');

    elementsAddClass(refs.answerText, 'is-hidden');
  }
}
