'use strict';

// write code here

const tree = document.querySelector('.tree');

function wrapTextInSpans() {
  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    if (li.firstChild.nodeType === Node.TEXT_NODE && li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.textContent.trim();
      li.firstChild.replaceWith(span);
    }
  });
}

wrapTextInSpans();

tree.addEventListener('click', (e) => {
  const clickedSpan = e.target.closest('span');

  if (!clickedSpan) {
    return;
  }

  const li = clickedSpan.parentElement;

  const nestedList = li.querySelector('ul');

  if (nestedList) {
    const isHidden = nestedList.style.display === 'none';

    nestedList.style.display = isHidden ? '' : 'none';
  }
});
