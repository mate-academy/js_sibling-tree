'use strict';

const headline = document.querySelector('.tree');

const slidinglist = (listEvent) => {
  if (listEvent.target.closest('span')) {
    const ul = listEvent.target.nextElementSibling;

    if (ul.style.opacity === '1') {
      ul.style.transition = 'opacity 0.2s';
      ul.style.opacity = '0';
    } else if (ul.style.opacity === '0') {
      ul.style.transition = 'opacity 0.2s';
      ul.style.opacity = '1';
    } else {
      ul.style.transition = 'opacity 0.2s';
      ul.style.opacity = '0';
    }
  }
};

headline.addEventListener('click', slidinglist);
