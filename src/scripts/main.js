'use strict';

// write code here
const ulLists = document.querySelectorAll('li');

ulLists.forEach((el) => {
  if (el.querySelector('ul')) {
    const textNode = el.firstChild;
    const containerElement = document.createElement('span');

    textNode.parentNode.insertBefore(containerElement, textNode);
    containerElement.appendChild(textNode);

    containerElement.addEventListener('click', (e) => {
      e.stopPropagation();

      const childUl = el.querySelector('ul');

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });
  }
});
