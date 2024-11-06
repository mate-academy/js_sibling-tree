'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.tree li');

  listItems.forEach((li) => {
    const text = li.firstChild.nodeValue.trim();

    if (li.childElementCount !== 0) {
      const span = document.createElement('span');
      span.textContent = text;

      li.firstChild.remove();
      li.prepend(span);
    }
  });

  document.querySelectorAll('ul').forEach((i) => {
    i.style.display = 'block';
  });

  const spans = document.querySelectorAll('span');
  spans.forEach((span) => {
    span.addEventListener('click', () => {
      const content = span.nextElementSibling;
      if (content.style.display === '' || content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});
