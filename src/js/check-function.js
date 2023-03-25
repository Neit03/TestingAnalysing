import { refs } from './refs';

export function checkAnswer() {
  if (refs.selectQuestionFirst.value === 'more') {
    refs.selectQuestionFirst.classList.add('correct-value');
  } else if (refs.selectQuestionFirst.value !== 'more') {
    refs.selectQuestionFirst.classList.add('uncorrect-value');
    // refs.answerText.classList.add('is-visible');

    refs.rightAnswerFirst.textContent = 'more';
  }
  console.log(refs.selectQuestionSecond.value);
  if (refs.selectQuestionSecond.value === 'The more active') {
    refs.selectQuestionSecond.classList.add('correct-value');
  } else if (refs.selectQuestionSecond.value !== 'The more active') {
    refs.selectQuestionSecond.classList.add('uncorrect-value');
    // refs.answerText.classList.add('is-visible');

    refs.rightAnswerSecond.textContent = 'The more active';
  }
  if (refs.selectQuestionThird.value === 'The more I concentrate') {
    refs.selectQuestionThird.classList.add('correct-value');
  } else if (refs.selectQuestionThird.value !== 'The more I concentrate') {
    refs.selectQuestionThird.classList.add('uncorrect-value');
    // refs.answerText.classList.add('is-visible');

    refs.rightAnswerThird.textContent = 'The more I concentrate';
  }
}
