'use strict';

const treeList = document.querySelector('.tree');

function wrapperText() {
  const items = treeList.querySelectorAll('li');

  items.forEach((item) => {
    const text = item.firstChild;

    if (text.nodeType === 3) {
      const span = document.createElement('span');

      span.textContent = text.textContent;
      text.replaceWith(span);
    }
  });
}

const isShowListTree = (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const li = target.closest('li');
    const ul = li.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
};

wrapperText();
treeList.addEventListener('click', isShowListTree);
