'use strict';

const treeHeaders = document.querySelectorAll('.tree > li > :first-child');

// Wrap each header text in a span tag and add a click event
treeHeaders.forEach((header) => {
  // Wrap text content in a span tag
  const span = document.createElement('span');

  span.textContent = header.textContent;
  header.textContent = '';
  header.appendChild(span);

  // Add click event to toggle visibility of child elements
  span.addEventListener('click', () => {
    const parentLi = header.parentElement;
    const childrenUl = parentLi.querySelector('ul');

    if (childrenUl) {
      childrenUl.style.display =
        childrenUl.style.display === 'none' ? '' : 'none';
    }
  });
});
