'use strict';

// write code here
const listItems = document.querySelectorAll('.tree li > ul');

const headLines = Array.from(listItems).map((ul) => ul.parentElement);

headLines.forEach((headLine) => {
  const textNode = Array.from(headLine.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim(),
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.nodeValue.trim();

    headLine.replaceChild(span, textNode);

    span.addEventListener('click', () => {
      const ul = span.nextElementSibling;

      if (!ul) {
        return;
      }

      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    });
  }
});
