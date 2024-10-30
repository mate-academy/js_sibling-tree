'use strict';

const headings = document.querySelectorAll('li');

const headingsTexts = [
  'Fruit',
  'Fish',
  'Red',
  'Yellow',
  'Ocean fishes',
  'Freshwater fish',
];

headings.forEach((item) => {
  if (headingsTexts.includes(item.childNodes[0].textContent.trim())) {
    item.classList.add('heading');
  }
});

const style = document.createElement('style');

document.head.appendChild(style);

style.textContent = `
  .classToHide > ul {
    display: none;
  }
`;

const headingsWithClass = document.getElementsByClassName('heading');

Array.from(headingsWithClass).forEach((item) => {
  item.style.cursor = 'pointer';

  item.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.closest('.heading')) {
      item.classList.toggle('classToHide');
    }
  });
});
