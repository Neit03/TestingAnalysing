import { refs } from './refs';
import { state } from './state';

export function onModalOpen() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  refs.totalResult.textContent = `${state.totalResult}/10`;
  if (state.totalResult >= 8) {
    refs.resultText.textContent = 'Well done!';
  } else if (state.totalResult < 8 && state.totalResult >= 5) {
    refs.resultText.textContent = 'Good job! Next time will be better!';
  } else if (state.totalResult < 5) {
    refs.resultText.textContent = 'Review the rules and try again!';
  }
}
export function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}
export function onBackdropModalClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

export function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}
