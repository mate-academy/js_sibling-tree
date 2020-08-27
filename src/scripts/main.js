'use strict';

const items = document.querySelectorAll('li');

[...items]
  .filter(item => item.children.length !== 0)
  .forEach(item => {
    const textNode = item.firstChild;

    textNode.parentElement.insertAdjacentHTML('afterbegin', `
      <span>${textNode.textContent.trim()}</span>
    `);
    textNode.remove();
  });

const ul = document.querySelector('.tree');
const spans = document.querySelectorAll('span');
let isVisible = true;

ul.style.position = 'fixed';
ul.style.top = ul.getBoundingClientRect().y + 'px';
ul.style.left = ul.getBoundingClientRect().x + 'px';

[...spans].forEach(span => {
  span.addEventListener('click', event => {
    if (isVisible) {
      event.target.nextElementSibling.style.display = 'none';
      isVisible = false;
    } else {
      event.target.nextElementSibling.style.display = 'block';
      isVisible = true;
    }
  });
});
