'use strict';

function setSpan(element) {
  const fruit = element.firstChild.data.trim();
  const spannedFruit = document.createElement('span');

  spannedFruit.innerText = fruit;
  element.firstChild.remove();
  element.insertAdjacentElement('afterbegin', spannedFruit);
}

function modernizeElement(element) {
  const elementArray = [...element.children];

  if (elementArray.length !== 0) {
    elementArray.map((item) => {
      const ul = item.querySelector('ul');

      if (ul) {
        setSpan(item);
        modernizeElement(ul);
      }
    });
  } else {
  }
}

function toggleList(elements) {
  elements.map((element) => {
    const ul = element.nextSibling;

    element.addEventListener('click', () => {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    });
  });
}

const tree = document.querySelector('.tree');

modernizeElement(tree);

const headers = [...document.querySelectorAll('span')];

toggleList(headers);
