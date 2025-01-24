'use strict';

const titles = document.querySelectorAll('span');

titles.forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const contentStyle = window.getComputedStyle(content);

    if (contentStyle.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
