import { refs } from './refs';
import Notiflix from 'notiflix';

let totalResult = 0;

export function checkAnswer() {
  if (refs.selectQuestionFirst.value === 'more') {
    rightAnswer(refs.selectQuestionFirst);
  } else if (refs.selectQuestionFirst.value !== 'more') {
    wrongAnswer(
      refs.selectQuestionFirst,
      refs.answerTextFirst,
      refs.rightAnswerFirst,
      'more'
    );
  }

  if (refs.selectQuestionSecond.value === 'The more active') {
    rightAnswer(refs.selectQuestionSecond);
  } else if (refs.selectQuestionSecond.value !== 'The more active') {
    wrongAnswer(
      refs.selectQuestionSecond,
      refs.answerTextSecond,
      refs.rightAnswerSecond,
      'The more active'
    );
  }
  if (refs.selectQuestionThird.value === 'The more I concentrate') {
    rightAnswer(refs.selectQuestionThird);
  } else if (refs.selectQuestionThird.value !== 'The more I concentrate') {
    wrongAnswer(
      refs.selectQuestionThird,
      refs.answerTextThird,
      refs.rightAnswerThird,
      'The more I concentrate'
    );
  }
  if (refs.selectQuestionFourth.value === 'the vainer') {
    rightAnswer(refs.selectQuestionFourth);
  } else if (refs.selectQuestionFourth.value !== 'the vainer') {
    wrongAnswer(
      refs.selectQuestionFourth,
      refs.answerTextFourth,
      refs.rightAnswerFourth,
      'the vainer'
    );
  }
  if (totalResult > 8) {
    Notiflix.Notify.success('Good job!');
  } else if (totalResult < 8 && totalResult > 5) {
    Notiflix.Notify.info('Not bad! It is necessary to consolidate knowledge');
  } else if (totalResult < 5) {
    Notiflix.Notify.warning('Review the rules and try again!');
  }
  refs.resultValue.textContent = `${totalResult}/10`;
}

function rightAnswer(el) {
  totalResult += 1;
  el.classList.add('correct-value');
}

function wrongAnswer(el, text, answer, value) {
  el.classList.add('uncorrect-value');
  text.classList.add('is-visible');
  answer.textContent = value;
}
