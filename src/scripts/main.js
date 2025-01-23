'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.tree li');

  listItems.forEach((li) => {
    // If the <li> contains a nested <ul>, wrap the text node in a <span>
    const childUl = li.querySelector('ul');

    if (childUl) {
      const textNode = Array.from(li.childNodes).find((node) => {
        return node.nodeType === node.TEXT_NODE;
      });

      if (textNode) {
        // Wrap the text in a <span> and replace the text node
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        textNode.replaceWith(span);

        span.addEventListener('click', () => {
          childUl.style.display =
            childUl.style.display === 'none' ? 'block' : 'none';
        });
      }
    }
  });
});
