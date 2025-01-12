'use strict';

const tree = document.querySelector('.tree');

const listItems = document.querySelectorAll('li');

const headlines = [...listItems].filter((item) => item.children.length);

headlines.forEach((headline) => {
  const spanElement = document.createElement('span');

  spanElement.textContent = headline.firstChild.textContent;
  headline.firstChild.textContent = '';
  headline.insertAdjacentElement('afterbegin', spanElement);
});

tree.addEventListener('click', (ev) => {
  if (ev.target.tagName.toLowerCase() === 'span') {
    const li = ev.target.closest('li');

    [...li.children].forEach((child, index) => {
      if (index === 0) {
        return;
      }

      if (!child.style.display) {
        child.style.display = 'none';
      } else {
        child.removeAttribute('style');
      }
    });
  }
});
