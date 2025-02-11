'use strict';

document.querySelectorAll('li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.firstChild.textContent = '';
  li.prepend(span);
});

document.querySelectorAll('span').forEach((span) => {
  span.addEventListener('click', () => {
    const ulTopic = span.parentElement.querySelector('ul');

    ulTopic.style.display = ulTopic.style.display === 'none' ? '' : 'none';
  });
});
