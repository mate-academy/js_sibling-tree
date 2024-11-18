'use strict';

// write code here
const tree = document.querySelector('.tree');

(function wrapHeaderTextInSpan() {
  const listOfLi = [...document.querySelectorAll('li')];

  listOfLi.forEach((li) => {
    const textNode = li.firstChild;

    if (
      textNode &&
      textNode.nodeType === Node.TEXT_NODE &&
      li.querySelector('ul')
    ) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      textNode.replaceWith(span);
    }
  });
})();

tree.addEventListener('click', (e) => {
  const spanElement = e.target.closest('span');

  if (spanElement) {
    const ul = spanElement.parentElement.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
