'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach((element) => {
  if (element.childNodes.length > 1) {
    const spanWrapper = document.createElement('span');

    spanWrapper.innerHTML = `${element.firstChild.textContent}`;
    element.firstChild.replaceWith(spanWrapper);
  }
});

function hideList(target) {
  const nestedList = target.parentElement.querySelector('ul');

  if (nestedList) {
    nestedList.style.display =
      nestedList.style.display === 'none' ? 'block' : 'none';
  }
}

tree.onclick = function (events) {
  const target = events.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  hideList(target);
};
