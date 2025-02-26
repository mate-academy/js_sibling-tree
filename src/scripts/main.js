'use strict';

const all = Array.from(document.querySelectorAll('li'));

for (const li of all) {
  li.addEventListener('click', (e) => {
    const oldElement = li;
    const newElement = document.createElement('li');
    const titleWrap = document.createElement('span');

    titleWrap.textContent = li.firstChild.textContent;

    newElement.append(titleWrap);

    oldElement.parentNode.replaceChild(newElement, oldElement);

    newElement.addEventListener('click', () => {
      newElement.parentNode.replaceChild(oldElement, newElement);
    });
  });
}
