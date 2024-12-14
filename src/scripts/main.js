'use strict';

// write code here

const lis = document.querySelectorAll('li');

for (const li of lis) {
  const span = document.createElement('span');

  span.addEventListener('click', (e) => {
    const elem = e.currentTarget.nextSibling;

    if (elem === null) {
      return;
    }

    if (elem.style.display === 'none') {
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    }
  });

  span.appendChild(document.createTextNode(li.firstChild.nodeValue));

  li.replaceChild(span, li.firstChild);
}
