'use strict';

// write code here
document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.replaceChild(span, li.firstChild);
});

document.querySelectorAll('.tree li > span').forEach((span) => {
  span.addEventListener('click', () => {
    const nestedUl = span.parentElement.querySelector('ul');

    if (nestedUl) {
      nestedUl.style.display =
        nestedUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
