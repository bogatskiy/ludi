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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGNvbnN0IGZvcm1VcGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkJyk7XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIGZpbGVVcGxvYWQodXJsLCBkYXRhLCBjYikge1xyXG4vLyAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuLy8gICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbi8vXHJcbi8vICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuLy8gICAgIGNiKHJlc3VsdC5zdGF0dXMpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgeGhyLnNlbmQoZGF0YSk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gcHJlcGFyZVNlbmRGaWxlKGUpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcclxuLy8gICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuLy8gICBsZXQgZmlsZSA9IGRvY3VtZW50XHJcbi8vICAgICAucXVlcnlTZWxlY3RvcignI2ZpbGUtc2VsZWN0JylcclxuLy8gICAgIC5maWxlc1swXTtcclxuLy8gICBsZXQgbmFtZSA9IGRvY3VtZW50XHJcbi8vICAgICAucXVlcnlTZWxlY3RvcignI2ZpbGUtZGVzYycpXHJcbi8vICAgICAudmFsdWU7XHJcbi8vXHJcbi8vICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUsIGZpbGUubmFtZSk7XHJcbi8vICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgbmFtZSk7XHJcbi8vXHJcbi8vICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9ICdVcGxvYWRpbmcuLi4nO1xyXG4vLyAgIGZpbGVVcGxvYWQoJy91cGxvYWQnLCBmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGlmIChmb3JtVXBsb2FkKSB7XHJcbi8vICAgZm9ybVVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwcmVwYXJlU2VuZEZpbGUpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIC8vLS0tLS0tLS0tLS0tIGJsb2NrIG1haWxcclxuLy8gY29uc3QgZm9ybU1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbCcpO1xyXG4vL1xyXG4vLyBpZiAoZm9ybU1haWwpIHtcclxuLy8gICBmb3JtTWFpbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwcmVwYXJlU2VuZE1haWwpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHByZXBhcmVTZW5kTWFpbChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbi8vICAgbGV0IGRhdGEgPSB7XHJcbi8vICAgICBuYW1lOiBmb3JtTWFpbC5uYW1lLnZhbHVlLFxyXG4vLyAgICAgZW1haWw6IGZvcm1NYWlsLmVtYWlsLnZhbHVlLFxyXG4vLyAgICAgdGV4dDogZm9ybU1haWwudGV4dC52YWx1ZVxyXG4vLyAgIH07XHJcbi8vICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9ICdTZW5kaW5nLi4uJztcclxuLy8gICBzZW5kTWFpbERhdGEoJy9jb250YWN0JywgZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHNlbmRNYWlsRGF0YSh1cmwsIGRhdGEsIGNiKSB7XHJcbi8vICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuLy8gICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuLy8gICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgY2IocmVzdWx0LnN0YXR1cyk7XHJcbi8vICAgfTtcclxuLy8gICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbi8vIH1cclxuXHJcbnZhciBtZW51VG9nZ2xlID0gJCgnLm1haW4tbmF2X190b2dnbGUnKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2xpc3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG5pZiAobWVudVRvZ2dsZSkge1xyXG4gIG1lbnVUb2dnbGUub24oJ2NsaWNrJywgbWVudU9wZW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVPcGVuKCkge1xyXG4gIHZhciBtZW51ID0gJCgnLm1haW4tbmF2X19saXN0Jyk7XHJcblxyXG5cclxuXHJcbiAgaWYgKG1lbnUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xyXG4gICAgbWVudVRvZ2dsZS5hZGRDbGFzcygnbWFpbi1uYXZfX3RvZ2dsZS0tb3BlbicpXHJcbiAgICBtZW51LnNob3coMzAwKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51VG9nZ2xlLnJlbW92ZUNsYXNzKCdtYWluLW5hdl9fdG9nZ2xlLS1vcGVuJylcclxuICAgIG1lbnUuaGlkZSgzMDApXHJcbiAgfVxyXG59Il19
