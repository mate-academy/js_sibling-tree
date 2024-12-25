'use strict';

// write code here
const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const title = e.target.closest('li');
  const childs = [...title.children];

  for (const el of childs) {
    if (el.style.display === 'none') {
      el.style.display = 'block';
      title.style.fontWeight = 'normal';
    } else {
      el.style.display = 'none';
      title.style.fontWeight = 'bold';
    }
  }
});
