const formUpload = document.querySelector('#upload');

function fileUpload(url, data, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);

  xhr.onload = function (e) {
    let result = JSON.parse(xhr.responseText);
    cb(result.status);
  };

  xhr.send(data);
}

function prepareSendFile(e) {
  e.preventDefault();
  let resultContainer = document.querySelector('.status');
  let formData = new FormData();
  let file = document
    .querySelector('#file-select')
    .files[0];
  let name = document
    .querySelector('#file-desc')
    .value;

  formData.append('photo', file, file.name);
  formData.append('name', name);

  resultContainer.innerHTML = 'Uploading...';
  fileUpload('/upload', formData, function (data) {
    resultContainer.innerHTML = data;
  });
}

if (formUpload) {
  formUpload.addEventListener('submit', prepareSendFile);
}

//------------ block mail
const formMail = document.querySelector('#mail');

if (formMail) {
  formMail.addEventListener('submit', prepareSendMail);
}

function prepareSendMail(e) {
  e.preventDefault();
  let resultContainer = document.querySelector('.status');
  let data = {
    name: formMail.name.value,
    email: formMail.email.value,
    text: formMail.text.value
  };
  resultContainer.innerHTML = 'Sending...';
  sendMailData('/contact', data, function (data) {
    resultContainer.innerHTML = data;
  });
}

function sendMailData(url, data, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (e) {
    let result = JSON.parse(xhr.responseText);
    cb(result.status);
  };
  xhr.send(JSON.stringify(data));
}

const menuToggle = $('.main-nav__toggle')
document.querySelector('.main-nav__list').style.display = 'none'

if (menuToggle) {
  menuToggle.on('click', menuOpen)
}

function menuOpen() {
  let menu = $('.main-nav__list')



  if (menu.css('display') === 'none') {
    menuToggle.addClass('main-nav__toggle--open')
    menu.show(300)
  } else {
    menuToggle.removeClass('main-nav__toggle--open')
    menu.hide(300)
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybVVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKTtcclxuXHJcbmZ1bmN0aW9uIGZpbGVVcGxvYWQodXJsLCBkYXRhLCBjYikge1xyXG4gIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcblxyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICBjYihyZXN1bHQuc3RhdHVzKTtcclxuICB9O1xyXG5cclxuICB4aHIuc2VuZChkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVNlbmRGaWxlKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IHJlc3VsdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcclxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBsZXQgZmlsZSA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcignI2ZpbGUtc2VsZWN0JylcclxuICAgIC5maWxlc1swXTtcclxuICBsZXQgbmFtZSA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcignI2ZpbGUtZGVzYycpXHJcbiAgICAudmFsdWU7XHJcblxyXG4gIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlLCBmaWxlLm5hbWUpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG5cclxuICByZXN1bHRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VwbG9hZGluZy4uLic7XHJcbiAgZmlsZVVwbG9hZCgnL3VwbG9hZCcsIGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9IGRhdGE7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmlmIChmb3JtVXBsb2FkKSB7XHJcbiAgZm9ybVVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBwcmVwYXJlU2VuZEZpbGUpO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLSBibG9jayBtYWlsXHJcbmNvbnN0IGZvcm1NYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haWwnKTtcclxuXHJcbmlmIChmb3JtTWFpbCkge1xyXG4gIGZvcm1NYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByZXBhcmVTZW5kTWFpbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVTZW5kTWFpbChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbiAgbGV0IGRhdGEgPSB7XHJcbiAgICBuYW1lOiBmb3JtTWFpbC5uYW1lLnZhbHVlLFxyXG4gICAgZW1haWw6IGZvcm1NYWlsLmVtYWlsLnZhbHVlLFxyXG4gICAgdGV4dDogZm9ybU1haWwudGV4dC52YWx1ZVxyXG4gIH07XHJcbiAgcmVzdWx0Q29udGFpbmVyLmlubmVySFRNTCA9ICdTZW5kaW5nLi4uJztcclxuICBzZW5kTWFpbERhdGEoJy9jb250YWN0JywgZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWFpbERhdGEodXJsLCBkYXRhLCBjYikge1xyXG4gIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIGNiKHJlc3VsdC5zdGF0dXMpO1xyXG4gIH07XHJcbiAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcblxyXG5jb25zdCBtZW51VG9nZ2xlID0gJCgnLm1haW4tbmF2X190b2dnbGUnKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2xpc3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG5pZiAobWVudVRvZ2dsZSkge1xyXG4gIG1lbnVUb2dnbGUub24oJ2NsaWNrJywgbWVudU9wZW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVPcGVuKCkge1xyXG4gIGxldCBtZW51ID0gJCgnLm1haW4tbmF2X19saXN0JylcclxuXHJcblxyXG5cclxuICBpZiAobWVudS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XHJcbiAgICBtZW51VG9nZ2xlLmFkZENsYXNzKCdtYWluLW5hdl9fdG9nZ2xlLS1vcGVuJylcclxuICAgIG1lbnUuc2hvdygzMDApXHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVUb2dnbGUucmVtb3ZlQ2xhc3MoJ21haW4tbmF2X190b2dnbGUtLW9wZW4nKVxyXG4gICAgbWVudS5oaWRlKDMwMClcclxuICB9XHJcbn0iXX0=
