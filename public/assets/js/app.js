'use strict';

// import {sendAjaxJson} from 'sendAjaxJson';


// let formUpload = document.querySelector('#upload');
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
// let formMail = document.querySelector('#mail');
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


//--------------------------------------------------------------

var menuToggle = $('.main-nav__toggle');
document.querySelector('.main-nav__list').style.display = 'none';

if (menuToggle) menuToggle.on('click', menuOpen);

function menuOpen() {
  var menu = $('.main-nav__list');

  if (menu.css('display') === 'none') {
    menuToggle.addClass('main-nav__toggle--open');
    menu.slideToggle(300);
  } else {
    menuToggle.removeClass('main-nav__toggle--open');
    menu.slideToggle(300);
  }
}

//----------------------------------------------------------

$(document).ready(function () {
  if ($('.food-menu__item-title')) {
    $('.food-menu__item-title').click(function () {
      $(this).find('.food-menu__toggle').toggleClass('food-menu__toggle--open');
      $(this).next('ul').slideToggle(500);
    });
  }
});

//------------------------------------------

function sendAjaxJson(url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (e) {
    var result = JSON.parse(xhr.responseText);
    cb(result);
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
  resultContainer.innerHTML = 'Sending...';
  sendAjaxJson('/music', data, function (data) {
    resultContainer.innerHTML = data.status;
  });
}

//-------------------------------------

var slider = function () {
  var counter = 1,
      duration = 600,
      inProcess = false;

  var moveSlider = function moveSlider(container) {

    var items = $('.slider__item', container),
        activeItem = items.filter('.active');

    if (counter >= items.length) counter = 0;

    var reqItem = items.eq(counter);

    activeItem.stop(true).animate({
      'left': '100%'
    }, duration);

    reqItem.stop(true).animate({
      'left': '0%'
    }, duration, function () {
      activeItem.removeClass('active').css('left', '-100%');
      $(this).addClass('active');
      inProcess = false;
    });
  };

  return {
    init: function init() {
      $('.slider__control--next').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;
          moveSlider($('.slider'));
          counter++;
        }
      });
    },
    move: function move() {
      setInterval(function () {
        moveSlider('.slider');
        counter++;
      }, 3000);
    }
  };
}();

$(function () {
  slider.init();
  slider.move();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiJCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsIm9uIiwibWVudU9wZW4iLCJtZW51IiwiY3NzIiwiYWRkQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsInJlbW92ZUNsYXNzIiwicmVhZHkiLCJjbGljayIsImZpbmQiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJzZW5kQWpheEpzb24iLCJ1cmwiLCJkYXRhIiwiY2IiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwiZSIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJzdHJpbmdpZnkiLCJkakFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmVwYXJlU2VuZFBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdENvbnRhaW5lciIsIm5hbWUiLCJ2YWx1ZSIsImltZyIsImNpdHkiLCJkZXNjIiwiaW5uZXJIVE1MIiwic3RhdHVzIiwic2xpZGVyIiwiY291bnRlciIsImR1cmF0aW9uIiwiaW5Qcm9jZXNzIiwibW92ZVNsaWRlciIsImNvbnRhaW5lciIsIml0ZW1zIiwiYWN0aXZlSXRlbSIsImZpbHRlciIsImxlbmd0aCIsInJlcUl0ZW0iLCJlcSIsInN0b3AiLCJhbmltYXRlIiwiaW5pdCIsIm1vdmUiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTlDYSxFQUFkOztBQWdEQTlDLEVBQUUsWUFBWTtBQUNaNkMsU0FBT2MsSUFBUDtBQUNBZCxTQUFPZSxJQUFQO0FBQ0QsQ0FIRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8vIGltcG9ydCB7c2VuZEFqYXhKc29ufSBmcm9tICdzZW5kQWpheEpzb24nO1xyXG5cclxuXHJcbi8vIGxldCBmb3JtVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpO1xyXG4vL1xyXG4vLyBmdW5jdGlvbiBmaWxlVXBsb2FkKHVybCwgZGF0YSwgY2IpIHtcclxuLy8gICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vL1xyXG4vLyAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuLy8gICB9O1xyXG4vL1xyXG4vLyAgIHhoci5zZW5kKGRhdGEpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHByZXBhcmVTZW5kRmlsZShlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbi8vICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbi8vICAgbGV0IGZpbGUgPSBkb2N1bWVudFxyXG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLXNlbGVjdCcpXHJcbi8vICAgICAuZmlsZXNbMF07XHJcbi8vICAgbGV0IG5hbWUgPSBkb2N1bWVudFxyXG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLWRlc2MnKVxyXG4vLyAgICAgLnZhbHVlO1xyXG4vL1xyXG4vLyAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlLCBmaWxlLm5hbWUpO1xyXG4vLyAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4vL1xyXG4vLyAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSAnVXBsb2FkaW5nLi4uJztcclxuLy8gICBmaWxlVXBsb2FkKCcvdXBsb2FkJywgZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL1xyXG4vLyBpZiAoZm9ybVVwbG9hZCkge1xyXG4vLyAgIGZvcm1VcGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlcGFyZVNlbmRGaWxlKTtcclxuLy8gfVxyXG4vL1xyXG4vLyAvLy0tLS0tLS0tLS0tLSBibG9jayBtYWlsXHJcbi8vIGxldCBmb3JtTWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJyk7XHJcbi8vXHJcbi8vIGlmIChmb3JtTWFpbCkge1xyXG4vLyAgIGZvcm1NYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByZXBhcmVTZW5kTWFpbCk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gcHJlcGFyZVNlbmRNYWlsKGUpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcclxuLy8gICBsZXQgZGF0YSA9IHtcclxuLy8gICAgIG5hbWU6IGZvcm1NYWlsLm5hbWUudmFsdWUsXHJcbi8vICAgICBlbWFpbDogZm9ybU1haWwuZW1haWwudmFsdWUsXHJcbi8vICAgICB0ZXh0OiBmb3JtTWFpbC50ZXh0LnZhbHVlXHJcbi8vICAgfTtcclxuLy8gICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1NlbmRpbmcuLi4nO1xyXG4vLyAgIHNlbmRNYWlsRGF0YSgnL2NvbnRhY3QnLCBkYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGE7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2VuZE1haWxEYXRhKHVybCwgZGF0YSwgY2IpIHtcclxuLy8gICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vLyAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4vLyAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuLy8gICB9O1xyXG4vLyAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IG1lbnVUb2dnbGUgPSAkKCcubWFpbi1uYXZfX3RvZ2dsZScpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbGlzdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbmlmIChtZW51VG9nZ2xlKSBtZW51VG9nZ2xlLm9uKCdjbGljaycsIG1lbnVPcGVuKVxyXG5cclxuZnVuY3Rpb24gbWVudU9wZW4oKSB7XHJcbiAgY29uc3QgbWVudSA9ICQoJy5tYWluLW5hdl9fbGlzdCcpXHJcblxyXG5cclxuICBpZiAobWVudS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XHJcbiAgICBtZW51VG9nZ2xlLmFkZENsYXNzKCdtYWluLW5hdl9fdG9nZ2xlLS1vcGVuJylcclxuICAgIG1lbnUuc2xpZGVUb2dnbGUoMzAwKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51VG9nZ2xlLnJlbW92ZUNsYXNzKCdtYWluLW5hdl9fdG9nZ2xlLS1vcGVuJylcclxuICAgIG1lbnUuc2xpZGVUb2dnbGUoMzAwKVxyXG4gIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQoJy5mb29kLW1lbnVfX2l0ZW0tdGl0bGUnKSkge1xyXG4gICAgJCgnLmZvb2QtbWVudV9faXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuZm9vZC1tZW51X190b2dnbGUnKS50b2dnbGVDbGFzcygnZm9vZC1tZW51X190b2dnbGUtLW9wZW4nKVxyXG4gICAgICAkKHRoaXMpLm5leHQoJ3VsJykuc2xpZGVUb2dnbGUoNTAwKVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIHNlbmRBamF4SnNvbih1cmwsIGRhdGEsIGNiKSB7XHJcbiAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpXHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXHJcbiAgICBjYihyZXN1bHQpXHJcbiAgfVxyXG4gIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG59XHJcblxyXG4vLy0tLS0gYmxvY2sgQmxvZ1xyXG5cclxuY29uc3QgZGpBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGphZGQnKVxyXG5cclxuaWYgKGRqQWRkKSB7XHJcbiAgZGpBZGQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlcGFyZVNlbmRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlU2VuZFBvc3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIGxldCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJylcclxuICBsZXQgZGF0YSA9IHtcclxuICAgIG5hbWU6IGRqQWRkLm5hbWUudmFsdWUsXHJcbiAgICBpbWc6IGRqQWRkLmltZy52YWx1ZSxcclxuICAgIGNpdHk6IGRqQWRkLmNpdHkudmFsdWUsXHJcbiAgICBkZXNjOiBkakFkZC5kZXNjLnZhbHVlXHJcbiAgfVxyXG4gIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSAnU2VuZGluZy4uLidcclxuICBzZW5kQWpheEpzb24oJy9tdXNpYycsIGRhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YS5zdGF0dXNcclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgc2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgY291bnRlciA9IDEsXHJcbiAgICBkdXJhdGlvbiA9IDYwMCxcclxuICAgIGluUHJvY2VzcyA9IGZhbHNlXHJcblxyXG4gIGxldCBtb3ZlU2xpZGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG5cclxuICAgIGxldCBpdGVtcyA9ICQoJy5zbGlkZXJfX2l0ZW0nLCBjb250YWluZXIpLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKVxyXG5cclxuICAgIGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkgY291bnRlciA9IDBcclxuXHJcbiAgICBsZXQgcmVxSXRlbSA9IGl0ZW1zLmVxKGNvdW50ZXIpXHJcblxyXG4gICAgYWN0aXZlSXRlbS5zdG9wKHRydWUpLmFuaW1hdGUoe1xyXG4gICAgICAnbGVmdCc6ICcxMDAlJ1xyXG4gICAgfSwgZHVyYXRpb24pXHJcblxyXG4gICAgcmVxSXRlbS5zdG9wKHRydWUpLmFuaW1hdGUoe1xyXG4gICAgICAnbGVmdCc6ICcwJSdcclxuICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsICctMTAwJScpXHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgIGluUHJvY2VzcyA9IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnLnNsaWRlcl9fY29udHJvbC0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGlmICghaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgICBpblByb2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgICBtb3ZlU2xpZGVyKCQoJy5zbGlkZXInKSlcclxuICAgICAgICAgIGNvdW50ZXIrK1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtb3ZlOiAoKSA9PiB7XHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBtb3ZlU2xpZGVyKCcuc2xpZGVyJylcclxuICAgICAgICBjb3VudGVyKytcclxuICAgICAgfSwgMzAwMClcclxuICAgIH1cclxuICB9XHJcbn0oKSlcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gIHNsaWRlci5pbml0KClcclxuICBzbGlkZXIubW92ZSgpXHJcbn0pXHJcbiJdfQ==
