'use strict';

const tree = document.querySelector('.tree');
// const li = document.querySelector('li');

const wrapSpan = (node) => {
  for (const li of node.querySelectorAll('li')) {
    const text = li.firstChild;

    const span = document.createElement('span');

    span.textContent = text.textContent;
    li.insertBefore(span, text);
    li.removeChild(text);
  }
};

wrapSpan(tree);

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    const childUl = li.querySelector('ul');

    if (childUl) {
      if (childUl.style.display === 'none' || !childUl.style.display) {
        childUl.style.display = 'block';
      } else {
        childUl.style.display = 'none';
      }
    }
  }
});
// write code here
