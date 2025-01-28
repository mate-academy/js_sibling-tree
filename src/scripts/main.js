'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const header = item.firstChild;

  if (header && header.nodeType === 3) {
    header.addEventListener('click', function (e) {
      e.stopPropagation();

      const nestedList = item.querySelector('ul');

      if (nestedList) {
        nestedList.classList.toggle('hidden');
      }
    });
  }
});

document.addEventListener('click', function (e) {
  const nestedLists = document.querySelectorAll('ul');

  nestedLists.forEach((list) => {
    if (!list.contains(e.target)) {
      list.classList.add('hidden');
    }
  });
});
