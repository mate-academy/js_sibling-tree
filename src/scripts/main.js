'use strict';

document.addEventListener('click', (e) => {
  const elem = e.target;
  const lastChild = elem.lastElementChild;

  if (lastChild.matches('ul')) {
    lastChild.style.display =
      getComputedStyle(lastChild).display === 'none' ? 'block' : 'none';
  }
});
// write code here
