'use strict';

const ul = document.querySelector('.tree');

// We create a span in li that contains a list
function addSpan(elem) {
  const elementChildren = [...elem.children];

  if (elementChildren.length === 0) {
    return;
  }

  if (elementChildren.length === 1) {
    const span = document.createElement('span');
    const textLi = elem.childNodes[0].textContent.trim();

    span.textContent = textLi;
    elem.prepend(span);
    elem.childNodes[1].remove();
  }

  for (const el of elementChildren) {
    addSpan(el);
  }
}

addSpan(ul);

// We hide ul when clicking on span
document.addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (!target) {
    return;
  }

  const list = target.nextSibling;

  if (list.hasAttribute('hidden')) {
    list.removeAttribute('hidden');
  } else {
    list.setAttribute('hidden', 'true');
  }
});
