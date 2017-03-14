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
    // $('.food-menu__toggle').toggleClass('food-menu__toggle--open');
    $(this).find('.food-menu__toggle').toggleClass('food-menu__toggle--open');
    $(this).next('ul').slideToggle(200);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBjb25zdCBmb3JtVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpO1xyXG4vL1xyXG4vLyBmdW5jdGlvbiBmaWxlVXBsb2FkKHVybCwgZGF0YSwgY2IpIHtcclxuLy8gICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vL1xyXG4vLyAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIHhoci5zZW5kKGRhdGEpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHByZXBhcmVTZW5kRmlsZShlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbi8vICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbi8vICAgbGV0IGZpbGUgPSBkb2N1bWVudFxyXG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLXNlbGVjdCcpXHJcbi8vICAgICAuZmlsZXNbMF07XHJcbi8vICAgbGV0IG5hbWUgPSBkb2N1bWVudFxyXG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLWRlc2MnKVxyXG4vLyAgICAgLnZhbHVlO1xyXG4vL1xyXG4vLyAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlLCBmaWxlLm5hbWUpO1xyXG4vLyAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4vL1xyXG4vLyAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSAnVXBsb2FkaW5nLi4uJztcclxuLy8gICBmaWxlVXBsb2FkKCcvdXBsb2FkJywgZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL1xyXG4vLyBpZiAoZm9ybVVwbG9hZCkge1xyXG4vLyAgIGZvcm1VcGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlcGFyZVNlbmRGaWxlKTtcclxuLy8gfVxyXG4vL1xyXG4vLyAvLy0tLS0tLS0tLS0tLSBibG9jayBtYWlsXHJcbi8vIGNvbnN0IGZvcm1NYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haWwnKTtcclxuLy9cclxuLy8gaWYgKGZvcm1NYWlsKSB7XHJcbi8vICAgZm9ybU1haWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlcGFyZVNlbmRNYWlsKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBwcmVwYXJlU2VuZE1haWwoZSkge1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICBsZXQgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4vLyAgIGxldCBkYXRhID0ge1xyXG4vLyAgICAgbmFtZTogZm9ybU1haWwubmFtZS52YWx1ZSxcclxuLy8gICAgIGVtYWlsOiBmb3JtTWFpbC5lbWFpbC52YWx1ZSxcclxuLy8gICAgIHRleHQ6IGZvcm1NYWlsLnRleHQudmFsdWVcclxuLy8gICB9O1xyXG4vLyAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSAnU2VuZGluZy4uLic7XHJcbi8vICAgc2VuZE1haWxEYXRhKCcvY29udGFjdCcsIGRhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBzZW5kTWFpbERhdGEodXJsLCBkYXRhLCBjYikge1xyXG4vLyAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuLy8gICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbi8vICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbi8vICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuLy8gICAgIGNiKHJlc3VsdC5zdGF0dXMpO1xyXG4vLyAgIH07XHJcbi8vICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4vLyB9XHJcblxyXG52YXIgbWVudVRvZ2dsZSA9ICQoJy5tYWluLW5hdl9fdG9nZ2xlJylcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19saXN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuaWYgKG1lbnVUb2dnbGUpIHtcclxuICBtZW51VG9nZ2xlLm9uKCdjbGljaycsIG1lbnVPcGVuKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51T3BlbigpIHtcclxuICB2YXIgbWVudSA9ICQoJy5tYWluLW5hdl9fbGlzdCcpO1xyXG5cclxuXHJcblxyXG4gIGlmIChtZW51LmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcclxuICAgIG1lbnVUb2dnbGUuYWRkQ2xhc3MoJ21haW4tbmF2X190b2dnbGUtLW9wZW4nKVxyXG4gICAgbWVudS5zaG93KDMwMClcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudVRvZ2dsZS5yZW1vdmVDbGFzcygnbWFpbi1uYXZfX3RvZ2dsZS0tb3BlbicpXHJcbiAgICBtZW51LmhpZGUoMzAwKVxyXG4gIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAkKCcuZm9vZC1tZW51X19pdGVtLXRpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIC8vICQoJy5mb29kLW1lbnVfX3RvZ2dsZScpLnRvZ2dsZUNsYXNzKCdmb29kLW1lbnVfX3RvZ2dsZS0tb3BlbicpO1xyXG4gICAgJCh0aGlzKS5maW5kKCcuZm9vZC1tZW51X190b2dnbGUnKS50b2dnbGVDbGFzcygnZm9vZC1tZW51X190b2dnbGUtLW9wZW4nKTtcclxuICAgICQodGhpcykubmV4dCgndWwnKS5zbGlkZVRvZ2dsZSgyMDApO1xyXG4gIH0pO1xyXG59KTsiXX0=
