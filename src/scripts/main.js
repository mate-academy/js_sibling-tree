'use strict';

const listItems = [...document.querySelectorAll('li')];
let titleSpan;

listItems.forEach((item) => {
  if (item.querySelector('ul')) {
    const itemHeaderText = item.firstChild.textContent;

    titleSpan = document.createElement('span');
    titleSpan.textContent = itemHeaderText;
    titleSpan.classList.add('header');
    item.firstChild.textContent = '';
    item.prepend(titleSpan);
  }
});

const spanHeaders = [...document.querySelectorAll('.header')];

spanHeaders.forEach((span) => {
  span.addEventListener('click', function () {
    span.classList.toggle('hidden');

    const section = span.nextElementSibling;

    if (span.classList.contains('hidden')) {
      section.style.display = 'none';
    } else {
      section.style.display = 'block';
    }
  });
});
