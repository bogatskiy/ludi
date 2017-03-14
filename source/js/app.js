'use strict';

// const formUpload = document.querySelector('#upload');
//
// function fileUpload(url, data, cb) {
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', url, true);
//
//   xhr.onload = function (e) {
//     let result = JSON.parse(xhr.responseText);
//     cb(result.status);
//   };
//
//   xhr.send(data);
// }
//
// function prepareSendFile(e) {
//   e.preventDefault();
//   let resultContainer = document.querySelector('.status');
//   let formData = new FormData();
//   let file = document
//     .querySelector('#file-select')
//     .files[0];
//   let name = document
//     .querySelector('#file-desc')
//     .value;
//
//   formData.append('photo', file, file.name);
//   formData.append('name', name);
//
//   resultContainer.innerHTML = 'Uploading...';
//   fileUpload('/upload', formData, function (data) {
//     resultContainer.innerHTML = data;
//   });
// }
//
// if (formUpload) {
//   formUpload.addEventListener('submit', prepareSendFile);
// }
//
// //------------ block mail
// const formMail = document.querySelector('#mail');
//
// if (formMail) {
//   formMail.addEventListener('submit', prepareSendMail);
// }
//
// function prepareSendMail(e) {
//   e.preventDefault();
//   let resultContainer = document.querySelector('.status');
//   let data = {
//     name: formMail.name.value,
//     email: formMail.email.value,
//     text: formMail.text.value
//   };
//   resultContainer.innerHTML = 'Sending...';
//   sendMailData('/contact', data, function (data) {
//     resultContainer.innerHTML = data;
//   });
// }
//
// function sendMailData(url, data, cb) {
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', url, true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.onload = function (e) {
//     let result = JSON.parse(xhr.responseText);
//     cb(result.status);
//   };
//   xhr.send(JSON.stringify(data));
// }

var menuToggle = $('.main-nav__toggle')
document.querySelector('.main-nav__list').style.display = 'none'

if (menuToggle) {
  menuToggle.on('click', menuOpen)
}

function menuOpen() {
  var menu = $('.main-nav__list');



  if (menu.css('display') === 'none') {
    menuToggle.addClass('main-nav__toggle--open')
    menu.show(300)
  } else {
    menuToggle.removeClass('main-nav__toggle--open')
    menu.hide(300)
  }
}