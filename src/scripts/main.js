'use strict';

const liElements = document.querySelectorAll('li');

for (const li of liElements) {
  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.nodeValue.trim();
      li.replaceChild(span, node);

      span.addEventListener('click', () => {
        for (const child of li.childNodes) {
          if (child !== span) {
            child.hidden = !child.hidden;
          }
        }
      });
    }
  }
}
