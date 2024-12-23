'use strict';

const treeUl = document.querySelector('.tree');

function wrapInSpan(tag) {
  [...tag.children].forEach((elem) => {
    if (elem.tagName === 'LI') {
      const isText = elem.firstChild;
      const isUl = elem.querySelector('ul');

      if (isText && isText.nodeType === 3) {
        const newSpan = document.createElement('span');

        newSpan.append(isText);
        elem.prepend(newSpan);
      }

      if (isUl && isUl.nodeType === 1) {
        wrapInSpan(isUl);
      }
    }
  });
}

wrapInSpan(treeUl);

treeUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const ulForHidden = e.target.nextElementSibling;

    if (ulForHidden && ulForHidden.tagName === 'UL') {
      ulForHidden.hidden = !ulForHidden.hidden;
    }
  }
});
