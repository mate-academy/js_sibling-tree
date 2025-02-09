'use strict';

const li = document.querySelectorAll('li');
const headLines = [];

for (const title of li) {
  if (title.firstElementChild) {
    const newTileParent = document.createElement('span');

    newTileParent.append(title.firstChild);
    title.prepend(newTileParent);
    headLines.push(title);
  }
}

const titles = document.querySelectorAll('span');

for (const title of titles) {
  title.addEventListener('click', () => {
    if (title.nextElementSibling.hasAttribute('hidden')) {
      title.nextElementSibling.removeAttribute('hidden');
    } else {
      title.nextElementSibling.setAttribute('hidden', 'true');
    }
  });
}
