'use strict';

// write code here
const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  if (item.querySelector('ul')) {
    const header = item.firstChild;

    if (header.nodeType === 3) {
      const pTag = document.createElement('span');

      pTag.textContent = header.textContent;
      item.insertBefore(pTag, item.firstChild);
      item.removeChild(header);

      pTag.addEventListener('click', (e) => {
        const nextUl = pTag.nextElementSibling;

        if (nextUl.style.display === 'none') {
          nextUl.style.display = 'block';
        } else {
          nextUl.style.display = 'none';
        }
      });
    }
  }
});
