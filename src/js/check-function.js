import { refs } from './refs';
import { state } from './state';

export function checkAnswer() {
  if (refs.selectQuestionFirst.value === 'more') {
    rightAnswer(refs.selectQuestionFirst, refs.answerTextFirst);
  } else if (refs.selectQuestionFirst.value !== 'more') {
    wrongAnswer(
      refs.selectQuestionFirst,
      refs.answerTextFirst,
      refs.rightAnswerFirst,
      'more'
    );
  }

  if (refs.selectQuestionSecond.value === 'The more active') {
    rightAnswer(refs.selectQuestionSecond, refs.answerTextSecond);
  } else if (refs.selectQuestionSecond.value !== 'The more active') {
    wrongAnswer(
      refs.selectQuestionSecond,
      refs.answerTextSecond,
      refs.rightAnswerSecond,
      'The more active'
    );
  }
  if (refs.selectQuestionThird.value === 'The more I concentrate') {
    rightAnswer(refs.selectQuestionThird, refs.answerTextThird);
  } else if (refs.selectQuestionThird.value !== 'The more I concentrate') {
    wrongAnswer(
      refs.selectQuestionThird,
      refs.answerTextThird,
      refs.rightAnswerThird,
      'The more I concentrate'
    );
  }
  if (refs.selectQuestionFourth.value === 'the vainer') {
    rightAnswer(refs.selectQuestionFourth, refs.answerTextFourth);
  } else if (refs.selectQuestionFourth.value !== 'the vainer') {
    wrongAnswer(
      refs.selectQuestionFourth,
      refs.answerTextFourth,
      refs.rightAnswerFourth,
      'the vainer'
    );
  }
  if (refs.selectQuestionFifth.value === 'The stronger, the better.') {
    rightAnswer(refs.selectQuestionFifth, refs.answerTextFifth);
  } else if (refs.selectQuestionFifth.value !== 'The stronger, the better.') {
    wrongAnswer(
      refs.selectQuestionFifth,
      refs.answerTextFifth,
      refs.rightAnswerFifth,
      'The stronger, the better'
    );
  }
  if (refs.selectQuestionSixth.value === 'The more optimistic your boss is') {
    rightAnswer(refs.selectQuestionSixth, refs.answerTextSixth);
  } else if (
    refs.selectQuestionSixth.value !== 'The more optimistic your boss is'
  ) {
    wrongAnswer(
      refs.selectQuestionSixth,
      refs.answerTextSixth,
      refs.rightAnswerSixth,
      'The more optimistic your boss is'
    );
  }
  if (refs.selectQuestionSeventh.value === 'The more calories') {
    rightAnswer(refs.selectQuestionSeventh, refs.answerTextSeventh);
  } else if (refs.selectQuestionSeventh.value !== 'The more calories') {
    wrongAnswer(
      refs.selectQuestionSeventh,
      refs.answerTextSeventh,
      refs.rightAnswerSeventh,
      'The more calories'
    );
  }
  if (refs.selectQuestionEighth.value === 'the fewer problems they will') {
    rightAnswer(refs.selectQuestionEighth, refs.answerTextEighth);
  } else if (
    refs.selectQuestionEighth.value !== 'the fewer problems they will'
  ) {
    wrongAnswer(
      refs.selectQuestionEighth,
      refs.answerTextEighth,
      refs.rightAnswerEigth,
      'the fewer problems they will'
    );
  }
  if (refs.selectQuestionNinth.value === 'bigger') {
    rightAnswer(refs.selectQuestionNinth, refs.answerTextNinth);
  } else if (refs.selectQuestionNinth.value !== 'bigger') {
    wrongAnswer(
      refs.selectQuestionNinth,
      refs.answerTextNinth,
      refs.rightAnswerNineth,
      'bigger'
    );
  }
  if (refs.selectQuestionTenth.value === 'The more relaxed your child is') {
    rightAnswer(refs.selectQuestionTenth, refs.answerTextTenth);
  } else if (
    refs.selectQuestionTenth.value !== 'The more relaxed your child is'
  ) {
    wrongAnswer(
      refs.selectQuestionTenth,
      refs.answerTextTenth,
      refs.rightAnswerTenth,
      'The more relaxed your child is '
    );
  }

  refs.resultWrap.classList.remove('is-hidden');
  refs.resultValue.textContent = `${state.totalResult}/10`;
}

function rightAnswer(el, text) {
  if (text.classList.contains('is-visible')) {
    text.classList.remove('is-visible');
  }
  state.totalResult += 1;
  el.classList.add('correct-value');
}

function wrongAnswer(el, text, answer, value) {
  el.classList.add('uncorrect-value');
  text.classList.add('is-visible');
  answer.textContent = value;
}

export function checkElContainsClass(element, className) {
  element.forEach(el => {
    if (el.classList.contains(className)) {
    }
    el.classList.remove(className);
  });
}
export function elementsRemoveClass(element, className) {
  element.forEach(el => {
    el.classList.remove(className);
  });
}
export function elementsAddClass(element, className) {
  element.forEach(el => {
    el.classList.add(className);
  });
}
