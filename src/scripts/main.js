'use strict';

const tree = document.querySelector('.tree');
const liItems = tree.querySelectorAll('li:has(> ul)');

tree.addEventListener('click', (event) => {

  let tar = event.target;

  if(!tar.matches('li:has(ul)')) {
    if(tar.matches('li')) {
      return;
    }
   tar = tar.closest('li')

   if(tar == null || !tar.matches('li:has(ul)')) {
    return;
   }
  }

  if (tar == null) {
    return;
  }

  const items = tar.querySelector('ul');

  if (items.style.display === 'none') {
    items.style.display = 'block';
    }
    else {
      items.style.display = 'none';
    }
});
