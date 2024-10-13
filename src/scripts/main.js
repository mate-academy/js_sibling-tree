'use strict';

const allLi = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const li of allLi) {
  if (li.children.length !== 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
