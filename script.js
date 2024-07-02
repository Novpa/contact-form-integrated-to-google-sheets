const scriptURL =
  'https://script.google.com/macros/s/AKfycbzYduO7dolLWKF5EeQNfiXhCNATbAPAGH2r4IbII34cMt9waKRi57qAGr8QfMVGt5b_XQ/exec';

const form = document.forms['Information'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alerts');
const btnClose = document.querySelector('.btn-close');

form.addEventListener('submit', e => {
  e.preventDefault();

  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      console.log('Success!', response);
      form.reset();
    })

    .catch(error => console.error('Error!', error.message));
});

//Removing the Success alert
function btnLoadingClose() {
  myAlert.classList.toggle('d-none');
}

btnClose.addEventListener('click', btnLoadingClose);
