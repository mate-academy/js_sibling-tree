'use strict';

// write code here

const tree = document.querySelector('.tree');
const lists = tree.querySelectorAll('ul');

lists.forEach((list) => {
  const closeBtn = list.previousElementSibling;

  closeBtn.addEventListener('click', () => {
    const toggleList = closeBtn.nextElementSibling;

    if (toggleList) {
      toggleList.style.display =
        toggleList.style.display === 'none' ? 'block' : 'none';
    }
  });
});
