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

$(document).ready(function(){
  $('.food-menu__item-title').click(function(){
    $(this).toggleClass('active');
    $(this).next('ul').slideToggle(200);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gY29uc3QgZm9ybVVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKTtcclxuLy9cclxuLy8gZnVuY3Rpb24gZmlsZVVwbG9hZCh1cmwsIGRhdGEsIGNiKSB7XHJcbi8vICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuLy9cclxuLy8gICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgY2IocmVzdWx0LnN0YXR1cyk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICB4aHIuc2VuZChkYXRhKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBwcmVwYXJlU2VuZEZpbGUoZSkge1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICBsZXQgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4vLyAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgIGxldCBmaWxlID0gZG9jdW1lbnRcclxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKCcjZmlsZS1zZWxlY3QnKVxyXG4vLyAgICAgLmZpbGVzWzBdO1xyXG4vLyAgIGxldCBuYW1lID0gZG9jdW1lbnRcclxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKCcjZmlsZS1kZXNjJylcclxuLy8gICAgIC52YWx1ZTtcclxuLy9cclxuLy8gICBmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuLy8gICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCBuYW1lKTtcclxuLy9cclxuLy8gICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VwbG9hZGluZy4uLic7XHJcbi8vICAgZmlsZVVwbG9hZCgnL3VwbG9hZCcsIGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGE7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuLy9cclxuLy8gaWYgKGZvcm1VcGxvYWQpIHtcclxuLy8gICBmb3JtVXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByZXBhcmVTZW5kRmlsZSk7XHJcbi8vIH1cclxuLy9cclxuLy8gLy8tLS0tLS0tLS0tLS0gYmxvY2sgbWFpbFxyXG4vLyBjb25zdCBmb3JtTWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJyk7XHJcbi8vXHJcbi8vIGlmIChmb3JtTWFpbCkge1xyXG4vLyAgIGZvcm1NYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByZXBhcmVTZW5kTWFpbCk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gcHJlcGFyZVNlbmRNYWlsKGUpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcclxuLy8gICBsZXQgZGF0YSA9IHtcclxuLy8gICAgIG5hbWU6IGZvcm1NYWlsLm5hbWUudmFsdWUsXHJcbi8vICAgICBlbWFpbDogZm9ybU1haWwuZW1haWwudmFsdWUsXHJcbi8vICAgICB0ZXh0OiBmb3JtTWFpbC50ZXh0LnZhbHVlXHJcbi8vICAgfTtcclxuLy8gICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1NlbmRpbmcuLi4nO1xyXG4vLyAgIHNlbmRNYWlsRGF0YSgnL2NvbnRhY3QnLCBkYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGE7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2VuZE1haWxEYXRhKHVybCwgZGF0YSwgY2IpIHtcclxuLy8gICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vLyAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4vLyAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuLy8gICB9O1xyXG4vLyAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuLy8gfVxyXG5cclxudmFyIG1lbnVUb2dnbGUgPSAkKCcubWFpbi1uYXZfX3RvZ2dsZScpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbGlzdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbmlmIChtZW51VG9nZ2xlKSB7XHJcbiAgbWVudVRvZ2dsZS5vbignY2xpY2snLCBtZW51T3BlbilcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudU9wZW4oKSB7XHJcbiAgdmFyIG1lbnUgPSAkKCcubWFpbi1uYXZfX2xpc3QnKTtcclxuXHJcblxyXG5cclxuICBpZiAobWVudS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XHJcbiAgICBtZW51VG9nZ2xlLmFkZENsYXNzKCdtYWluLW5hdl9fdG9nZ2xlLS1vcGVuJylcclxuICAgIG1lbnUuc2hvdygzMDApXHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVUb2dnbGUucmVtb3ZlQ2xhc3MoJ21haW4tbmF2X190b2dnbGUtLW9wZW4nKVxyXG4gICAgbWVudS5oaWRlKDMwMClcclxuICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmZvb2QtbWVudV9faXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykubmV4dCgndWwnKS5zbGlkZVRvZ2dsZSgyMDApO1xyXG4gIH0pO1xyXG59KTsiXX0=
