'use strict';

// var formUpload = document.querySelector('#upload');
//
// function fileUpload(url, data, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', url, true);
//
//   xhr.onload = function (e) {
//     var result = JSON.parse(xhr.responseText);
//     cb(result.status);
//   };
//
//   xhr.send(data);
// }
//
// function prepareSendFile(e) {
//   e.preventDefault();
//   var resultContainer = document.querySelector('.status');
//   var formData = new FormData();
//   var file = document
//     .querySelector('#file-select')
//     .files[0];
//   var name = document
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
// var formMail = document.querySelector('#mail');
//
// if (formMail) {
//   formMail.addEventListener('submit', prepareSendMail);
// }
//
// function prepareSendMail(e) {
//   e.preventDefault();
//   var resultContainer = document.querySelector('.status');
//   var data = {
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
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', url, true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.onload = function (e) {
//     var result = JSON.parse(xhr.responseText);
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
    $(this).find('.food-menu__toggle').toggleClass('food-menu__toggle--open');
    $(this).next('ul').slideToggle(500);
  });
});


//------------------------------------------

function sendAjaxJson(url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (e) {
    var result = JSON.parse(xhr.responseText);
    cb(result.status);
  };
  xhr.send(JSON.stringify(data));
}

//---- block Blog

var djAdd = document.querySelector('#djadd');

if (djAdd) {
  djAdd.addEventListener('submit', prepareSendPost);
}

function prepareSendPost(e) {
  e.preventDefault();
  var resultContainer = document.querySelector('.status');
  var data = {
    name: djAdd.name.value,
    img: djAdd.img.value,
    city: djAdd.city.value,
    desc: djAdd.desc.value
  };
  console.log(data)
  resultContainer.innerHTML = 'Sending...';
  sendAjaxJson('/music', data, function (data) {
    resultContainer.innerHTML = data;
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIHZhciBmb3JtVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpO1xyXG4vL1xyXG4vLyBmdW5jdGlvbiBmaWxlVXBsb2FkKHVybCwgZGF0YSwgY2IpIHtcclxuLy8gICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vL1xyXG4vLyAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIHhoci5zZW5kKGRhdGEpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHByZXBhcmVTZW5kRmlsZShlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIHZhciByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbi8vICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbi8vICAgdmFyIGZpbGUgPSBkb2N1bWVudFxyXG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLXNlbGVjdCcpXHJcbi8vICAgICAuZmlsZXNbMF07XHJcbi8vICAgdmFyIG5hbWUgPSBkb2N1bWVudFxyXG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLWRlc2MnKVxyXG4vLyAgICAgLnZhbHVlO1xyXG4vL1xyXG4vLyAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlLCBmaWxlLm5hbWUpO1xyXG4vLyAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4vL1xyXG4vLyAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSAnVXBsb2FkaW5nLi4uJztcclxuLy8gICBmaWxlVXBsb2FkKCcvdXBsb2FkJywgZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL1xyXG4vLyBpZiAoZm9ybVVwbG9hZCkge1xyXG4vLyAgIGZvcm1VcGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlcGFyZVNlbmRGaWxlKTtcclxuLy8gfVxyXG4vL1xyXG4vLyAvLy0tLS0tLS0tLS0tLSBibG9jayBtYWlsXHJcbi8vIHZhciBmb3JtTWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJyk7XHJcbi8vXHJcbi8vIGlmIChmb3JtTWFpbCkge1xyXG4vLyAgIGZvcm1NYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByZXBhcmVTZW5kTWFpbCk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gcHJlcGFyZVNlbmRNYWlsKGUpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgdmFyIHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcclxuLy8gICB2YXIgZGF0YSA9IHtcclxuLy8gICAgIG5hbWU6IGZvcm1NYWlsLm5hbWUudmFsdWUsXHJcbi8vICAgICBlbWFpbDogZm9ybU1haWwuZW1haWwudmFsdWUsXHJcbi8vICAgICB0ZXh0OiBmb3JtTWFpbC50ZXh0LnZhbHVlXHJcbi8vICAgfTtcclxuLy8gICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1NlbmRpbmcuLi4nO1xyXG4vLyAgIHNlbmRNYWlsRGF0YSgnL2NvbnRhY3QnLCBkYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGE7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2VuZE1haWxEYXRhKHVybCwgZGF0YSwgY2IpIHtcclxuLy8gICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vLyAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4vLyAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuLy8gICB9O1xyXG4vLyAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuLy8gfVxyXG5cclxudmFyIG1lbnVUb2dnbGUgPSAkKCcubWFpbi1uYXZfX3RvZ2dsZScpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbGlzdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbmlmIChtZW51VG9nZ2xlKSB7XHJcbiAgbWVudVRvZ2dsZS5vbignY2xpY2snLCBtZW51T3BlbilcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudU9wZW4oKSB7XHJcbiAgdmFyIG1lbnUgPSAkKCcubWFpbi1uYXZfX2xpc3QnKTtcclxuXHJcblxyXG5cclxuICBpZiAobWVudS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XHJcbiAgICBtZW51VG9nZ2xlLmFkZENsYXNzKCdtYWluLW5hdl9fdG9nZ2xlLS1vcGVuJylcclxuICAgIG1lbnUuc2hvdygzMDApXHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVUb2dnbGUucmVtb3ZlQ2xhc3MoJ21haW4tbmF2X190b2dnbGUtLW9wZW4nKVxyXG4gICAgbWVudS5oaWRlKDMwMClcclxuICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmZvb2QtbWVudV9faXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy5mb29kLW1lbnVfX3RvZ2dsZScpLnRvZ2dsZUNsYXNzKCdmb29kLW1lbnVfX3RvZ2dsZS0tb3BlbicpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCd1bCcpLnNsaWRlVG9nZ2xlKDUwMCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBzZW5kQWpheEpzb24odXJsLCBkYXRhLCBjYikge1xyXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIGNiKHJlc3VsdC5zdGF0dXMpO1xyXG4gIH07XHJcbiAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcblxyXG4vLy0tLS0gYmxvY2sgQmxvZ1xyXG5cclxudmFyIGRqQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RqYWRkJyk7XHJcblxyXG5pZiAoZGpBZGQpIHtcclxuICBkakFkZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwcmVwYXJlU2VuZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlU2VuZFBvc3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4gIHZhciBkYXRhID0ge1xyXG4gICAgbmFtZTogZGpBZGQubmFtZS52YWx1ZSxcclxuICAgIGltZzogZGpBZGQuaW1nLnZhbHVlLFxyXG4gICAgY2l0eTogZGpBZGQuY2l0eS52YWx1ZSxcclxuICAgIGRlc2M6IGRqQWRkLmRlc2MudmFsdWVcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9ICdTZW5kaW5nLi4uJztcclxuICBzZW5kQWpheEpzb24oJy9tdXNpYycsIGRhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YTtcclxuICB9KTtcclxufSJdfQ==
