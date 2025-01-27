'use strict';

const list = document.querySelector('.tree');
const li = list.querySelectorAll('li');

li.forEach((element) => {
  const childNodes = Array.from(element.childNodes);
  const textnode = childNodes.find((node) => node.nodeType === 3);

  if (textnode) {
    const span = document.createElement('span');

    span.textContent = textnode.nodeValue;
    element.replaceChild(span, textnode);

    span.addEventListener('click', (eve) => {
      const childUl = element.querySelector('ul');

      if (childUl) {
        if (childUl.style.display === 'none') {
          childUl.style.display = 'block';
        } else {
          childUl.style.display = 'none';
        }
      }
    });
  }
});
