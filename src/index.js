import { onBtnCheckClick, onBtnTryAgainClick } from './js/handlers';
import { onBackdropModalClick, onCloseModal } from './js/modal';
import { refs } from './js/refs';

refs.testForm.addEventListener('click', onBtnCheckClick);
refs.btnTryAgain.addEventListener('submit', onBtnTryAgainClick);
refs.btnModalClose.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropModalClick);
