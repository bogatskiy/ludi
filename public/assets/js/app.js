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


//--------------------------------------------------------------

var menuToggle = $('.main-nav__toggle')
document.querySelector('.main-nav__list').style.display = 'none'

if (menuToggle) {
  menuToggle.on('click', menuOpen)
}

function menuOpen() {
  var menu = $('.main-nav__list');


  if (menu.css('display') === 'none') {
    menuToggle.addClass('main-nav__toggle--open')
    menu.slideToggle(300)
  } else {
    menuToggle.removeClass('main-nav__toggle--open')
    menu.slideToggle(300)
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
  resultContainer.innerHTML = 'Sending...';
  sendAjaxJson('/music', data, function (data) {
    resultContainer.innerHTML = data;
  });
}


//-------------------------------------

var slider = (function () {
  var counter = 1,
    duration = 300,
    inProcess = false;

  var moveSlider = function (container) {

    var items = $('.slider__item', container),
      activeItem = items.filter('.active');

    if (counter >= items.length) counter = 0;


    var reqItem = items.eq(counter)

    activeItem.stop(true).animate({
      'left': '100%'
    }, duration)

    reqItem.stop(true).animate({
      'left': '0%'
    }, duration, function () {
      activeItem.removeClass('active').css('left', '-100%')
      $(this).addClass('active')
      inProcess = false
    })
  };

  return {
    init: function () {
      $('.slider__control--next').on('click', function (e) {
          e.preventDefault();

          setInterval(function () {

          }, 3000)

          if (!inProcess) {
            inProcess = true
            moveSlider($('.slider'))
            counter++
          }
        })
    }
  }
}());

$(function () {
  slider.init()
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyB2YXIgZm9ybVVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKTtcclxuLy9cclxuLy8gZnVuY3Rpb24gZmlsZVVwbG9hZCh1cmwsIGRhdGEsIGNiKSB7XHJcbi8vICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuLy9cclxuLy8gICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgY2IocmVzdWx0LnN0YXR1cyk7XHJcbi8vICAgfTtcclxuLy9cclxuLy8gICB4aHIuc2VuZChkYXRhKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBwcmVwYXJlU2VuZEZpbGUoZSkge1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICB2YXIgcmVzdWx0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4vLyAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgIHZhciBmaWxlID0gZG9jdW1lbnRcclxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKCcjZmlsZS1zZWxlY3QnKVxyXG4vLyAgICAgLmZpbGVzWzBdO1xyXG4vLyAgIHZhciBuYW1lID0gZG9jdW1lbnRcclxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKCcjZmlsZS1kZXNjJylcclxuLy8gICAgIC52YWx1ZTtcclxuLy9cclxuLy8gICBmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuLy8gICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCBuYW1lKTtcclxuLy9cclxuLy8gICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VwbG9hZGluZy4uLic7XHJcbi8vICAgZmlsZVVwbG9hZCgnL3VwbG9hZCcsIGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGE7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuLy9cclxuLy8gaWYgKGZvcm1VcGxvYWQpIHtcclxuLy8gICBmb3JtVXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByZXBhcmVTZW5kRmlsZSk7XHJcbi8vIH1cclxuLy9cclxuLy8gLy8tLS0tLS0tLS0tLS0gYmxvY2sgbWFpbFxyXG4vLyB2YXIgZm9ybU1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbCcpO1xyXG4vL1xyXG4vLyBpZiAoZm9ybU1haWwpIHtcclxuLy8gICBmb3JtTWFpbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwcmVwYXJlU2VuZE1haWwpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHByZXBhcmVTZW5kTWFpbChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIHZhciByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbi8vICAgdmFyIGRhdGEgPSB7XHJcbi8vICAgICBuYW1lOiBmb3JtTWFpbC5uYW1lLnZhbHVlLFxyXG4vLyAgICAgZW1haWw6IGZvcm1NYWlsLmVtYWlsLnZhbHVlLFxyXG4vLyAgICAgdGV4dDogZm9ybU1haWwudGV4dC52YWx1ZVxyXG4vLyAgIH07XHJcbi8vICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9ICdTZW5kaW5nLi4uJztcclxuLy8gICBzZW5kTWFpbERhdGEoJy9jb250YWN0JywgZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHNlbmRNYWlsRGF0YSh1cmwsIGRhdGEsIGNiKSB7XHJcbi8vICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuLy8gICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuLy8gICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgY2IocmVzdWx0LnN0YXR1cyk7XHJcbi8vICAgfTtcclxuLy8gICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbi8vIH1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgbWVudVRvZ2dsZSA9ICQoJy5tYWluLW5hdl9fdG9nZ2xlJylcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19saXN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuaWYgKG1lbnVUb2dnbGUpIHtcclxuICBtZW51VG9nZ2xlLm9uKCdjbGljaycsIG1lbnVPcGVuKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51T3BlbigpIHtcclxuICB2YXIgbWVudSA9ICQoJy5tYWluLW5hdl9fbGlzdCcpO1xyXG5cclxuXHJcbiAgaWYgKG1lbnUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xyXG4gICAgbWVudVRvZ2dsZS5hZGRDbGFzcygnbWFpbi1uYXZfX3RvZ2dsZS0tb3BlbicpXHJcbiAgICBtZW51LnNsaWRlVG9nZ2xlKDMwMClcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudVRvZ2dsZS5yZW1vdmVDbGFzcygnbWFpbi1uYXZfX3RvZ2dsZS0tb3BlbicpXHJcbiAgICBtZW51LnNsaWRlVG9nZ2xlKDMwMClcclxuICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKCcuZm9vZC1tZW51X19pdGVtLXRpdGxlJykpIHtcclxuICAgICQoJy5mb29kLW1lbnVfX2l0ZW0tdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykuZmluZCgnLmZvb2QtbWVudV9fdG9nZ2xlJykudG9nZ2xlQ2xhc3MoJ2Zvb2QtbWVudV9fdG9nZ2xlLS1vcGVuJyk7XHJcbiAgICAgICQodGhpcykubmV4dCgndWwnKS5zbGlkZVRvZ2dsZSg1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gc2VuZEFqYXhKc29uKHVybCwgZGF0YSwgY2IpIHtcclxuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuICB9O1xyXG4gIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG5cclxuLy8tLS0tIGJsb2NrIEJsb2dcclxuXHJcbnZhciBkakFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkamFkZCcpO1xyXG5cclxuaWYgKGRqQWRkKSB7XHJcbiAgZGpBZGQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJlcGFyZVNlbmRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVNlbmRQb3N0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcclxuICB2YXIgZGF0YSA9IHtcclxuICAgIG5hbWU6IGRqQWRkLm5hbWUudmFsdWUsXHJcbiAgICBpbWc6IGRqQWRkLmltZy52YWx1ZSxcclxuICAgIGNpdHk6IGRqQWRkLmNpdHkudmFsdWUsXHJcbiAgICBkZXNjOiBkakFkZC5kZXNjLnZhbHVlXHJcbiAgfTtcclxuICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1NlbmRpbmcuLi4nO1xyXG4gIHNlbmRBamF4SnNvbignL211c2ljJywgZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgc2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY291bnRlciA9IDEsXHJcbiAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG5cclxuICB2YXIgbW92ZVNsaWRlciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuXHJcbiAgICB2YXIgaXRlbXMgPSAkKCcuc2xpZGVyX19pdGVtJywgY29udGFpbmVyKSxcclxuICAgICAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpO1xyXG5cclxuICAgIGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkgY291bnRlciA9IDA7XHJcblxyXG5cclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcilcclxuXHJcbiAgICBhY3RpdmVJdGVtLnN0b3AodHJ1ZSkuYW5pbWF0ZSh7XHJcbiAgICAgICdsZWZ0JzogJzEwMCUnXHJcbiAgICB9LCBkdXJhdGlvbilcclxuXHJcbiAgICByZXFJdGVtLnN0b3AodHJ1ZSkuYW5pbWF0ZSh7XHJcbiAgICAgICdsZWZ0JzogJzAlJ1xyXG4gICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0JywgJy0xMDAlJylcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgaW5Qcm9jZXNzID0gZmFsc2VcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnLnNsaWRlcl9fY29udHJvbC0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgIH0sIDMwMDApXHJcblxyXG4gICAgICAgICAgaWYgKCFpblByb2Nlc3MpIHtcclxuICAgICAgICAgICAgaW5Qcm9jZXNzID0gdHJ1ZVxyXG4gICAgICAgICAgICBtb3ZlU2xpZGVyKCQoJy5zbGlkZXInKSlcclxuICAgICAgICAgICAgY291bnRlcisrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0oKSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICBzbGlkZXIuaW5pdCgpXHJcbn0pIl19
