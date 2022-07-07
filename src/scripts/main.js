'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    span.dataset.wrapper = true;
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (clickEvent) => {
  const target = clickEvent.target;

  if (target.dataset.wrapper) {
    target.nextSibling.hidden = !target.nextSibling.hidden;
  }
});
