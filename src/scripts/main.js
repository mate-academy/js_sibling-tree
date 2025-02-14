'use strict';

// write code here
const lis = document.querySelectorAll('.tree li');

lis.forEach((li) => {
  const text = li.firstChild;
  const newSpan = document.createElement('span');

  newSpan.className = 'textWrapper';
  newSpan.appendChild(document.createTextNode(text.nodeValue));
  li.replaceChild(newSpan, text);
});

const textWrappers = document.querySelectorAll('.textWrapper');

textWrappers.forEach((textWrapper) => {
  textWrapper.addEventListener('click', (e) => {
    const nextElement = e.target.nextSibling;

    if (nextElement.style.display === 'none') {
      nextElement.style.display = 'block';

      return;
    }

    nextElement.style.display = 'none';
  });
});
