'use strict';

const tree = document.querySelector('.tree');

function makeTreeExpandable(root) {
  root.querySelectorAll('li').forEach((li) => {
    if (li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.childNodes[0].textContent;
      li.childNodes[0].textContent = '';
      li.insertBefore(span, li.childNodes[0]);

      span.addEventListener('click', () => {
        li.querySelector('ul').classList.toggle('hidden');
      });
    }
  });
}

const style = document.createElement('style');

style.textContent = `
  .hidden {
    display: none;
  }
`;
document.head.appendChild(style);

makeTreeExpandable(tree);
