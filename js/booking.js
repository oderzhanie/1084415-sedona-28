'use strict';

var bookingButton = document.querySelector('.booking-form__title');
var bookingWindow = document.querySelector('.booking-form');

bookingButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (bookingWindow.classList.contains('visually-hidden')) {
    bookingWindow.classList.remove('visually-hidden');
    bookingWindow.classList.add('form-opened');
  } else {
    bookingWindow.classList.add('visually-hidden');
    bookingWindow.classList.remove('form-opened');
  }
});


