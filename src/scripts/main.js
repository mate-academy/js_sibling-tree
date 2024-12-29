'use strict';

// write code here
const tree = document.querySelector('.tree');

addSpanToFirstTextChild(tree);

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');
  const li = span.closest('li');
  const list = li.querySelector('ul');

  if (list.style.display === 'none') {
    list.style.display = '';
  } else {
    list.style.display = 'none';
  }
});

function addSpanToFirstTextChild(list) {
  const liList = list.querySelectorAll('li');

  for (const li of liList) {
    if (!li.firstChild) {
      return;
    }

    if (li.firstChild.tagName === 'UL') {
      addSpanToFirstTextChild(li.firstChild);
    }

    const span = document.createElement('span');

    if (li.querySelector('ul')) {
      span.innerText = li.firstChild.textContent.trim();
      li.replaceChild(span, li.firstChild);
      addSpanToFirstTextChild(li.querySelector('ul'));
    }
  }
}
