'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((item) => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');
    const originalText = item.firstChild.textContent.trim();

    span.textContent = originalText;
    item.firstChild.textContent = '';
    item.insertBefore(span, item.firstChild);
  }
});

const titles = document.querySelectorAll('span');

titles.forEach((title) => {
  title.addEventListener('click', () => {
    if (title.nextElementSibling.style.display === 'none') {
      title.nextElementSibling.style.display = '';
    } else {
      title.nextElementSibling.style.display = 'none';
    }
  });
});
