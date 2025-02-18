'use strict';

const mainTree = document.querySelector('.tree');

const childrenArray = Array.from(mainTree.children);

childrenArray.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (e.target.closest('li') && e.target.children.length !== 0) {
      for (const item of [...e.target.children]) {
        if (item.style.display === 'none') {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    }
  });
});
