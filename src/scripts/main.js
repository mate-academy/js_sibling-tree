'use strict';

const list = document.querySelectorAll('li');

function addSpanToList(listElement) {
  listElement.forEach((li) => {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent;

    if (span.textContent[0] === '\n') {
      span.classList.add('title');
      span.style.display = 'block';
    }

    li.replaceChild(span, li.firstChild);
  });
}

addSpanToList(list);

const titleList = document.querySelectorAll('.title');

titleList.forEach((item) => {
  item.addEventListener('click', () => {
    const ul = item.nextElementSibling;

    if (ul.style.display === 'none') {
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }
  });
});
