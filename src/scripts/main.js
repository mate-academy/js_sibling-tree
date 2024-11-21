'use strict';

const tree = document.querySelector('.tree');

function sliding(e) {
  const targetLi = e.target.closest('li');
  const subList = targetLi.querySelector('ul');

  if (targetLi && subList) {
    subList.style.display = subList.style.display === 'none' ? '' : 'none';
  }
}

tree.addEventListener('click', sliding);
