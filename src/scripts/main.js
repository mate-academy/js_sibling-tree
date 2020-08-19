'use strict';
document.body.style.display = 'block';
document.body.style.padding = '200px 0 0 40%';

document.querySelectorAll('li').forEach((li) => {
  li.style.cursor = 'pointer';
  li.parentNode.style.transition = '1s';
  li.parentNode.style.overflow = 'hidden';

  li.onclick = (event) => {
    event.stopPropagation();

    const ul = li.querySelector('ul');

    if (!ul) {
      return;
    }

    if (ul.style.opacity !== '0') {
      ul.style.opacity = '0';
      ul.style.transform = 'scaleY(0)';
      ul.style.maxHeight = '0';
    } else {
      ul.style.opacity = '1';
      ul.style.transform = 'none';
      ul.style.maxHeight = '';
    }
  };
});
