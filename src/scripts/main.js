'use strict';

// eslint-disable-next-line no-shadow
function wrapTextInSpans(tree) {
  const items = tree.querySelectorAll('li');

  items.forEach((li) => {
    // If the first child of `li` is not a `span`, wrap it in a `span`
    if (li.firstChild.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.textContent.trim();
      li.firstChild.replaceWith(span);
    }
  });
}

const tree = document.querySelector('.tree');

wrapTextInSpans(tree);

tree.addEventListener('click', (ev) => {
  const span = ev.target.closest('span');

  if (!span) {
    return; // Exit if the click was not on a span
  }

  const li = span.parentElement; // Get the parent `li` of the span
  const childUl = li.querySelector('ul'); // Find the child `ul` if it exists

  if (childUl) {
    // Toggle visibility of the child `ul`
    childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
  }
});
