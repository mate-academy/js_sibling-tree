'use strict';

document.querySelectorAll('li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent;
  li.replaceChild(span, li.firstChild);

  span.addEventListener('click', (e) => {
    const children = li.querySelector('ul');

    if (children) {
      children.style.display =
        children.style.display === 'none'
          ? (children.style.display = 'block')
          : (children.style.display = 'none');
    }
  });
});
