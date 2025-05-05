'use strict';
const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('open-model does not exist');
function handleClick(event) {
  $dialog?.showModal();
}
$openModal.addEventListener('click', handleClick);
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('dismiss-modal does not exist');
function handleClickClose(event) {
  $dialog?.close();
}
$dismissModal.addEventListener('click', handleClickClose);
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog does not exist');
