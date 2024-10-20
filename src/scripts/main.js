'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  const element = e.target.closest('li');

  if (element) {
    Array.from(element.children).forEach((child) => {
      if (child.tagName !== 'SPAN') {
        child.style.display = child.style.display === 'none' ? '' : 'none';
      }
    });
  }
});

document.body.addEventListener('click', (e) => {
  if (!list.contains(e.target)) {
    const allElements = document.querySelectorAll('.tree li ul');

    allElements.forEach((ul) => {
      ul.style.display = 'none';
    });
  }
});
