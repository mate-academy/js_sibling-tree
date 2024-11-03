'use strict';

// write code here
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

for (const i of li) {
  const span = document.createElement('span');

  i.prepend(span);
  span.prepend(span.nextSibling);
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const targ = e.target.nextSibling;

    if (targ.tagName === 'UL') {
      targ.style.display = targ.style.display === 'none' ? 'block' : 'none';
    }
  }
});
