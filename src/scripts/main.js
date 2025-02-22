'use strict';

document.querySelectorAll('.tree-title span').forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.parentElement.nextElementSibling;

    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
