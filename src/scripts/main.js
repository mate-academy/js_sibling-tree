'use strict';

const tree = document.querySelector('.tree');

function addSpan(list) {
  for (const el of list.querySelectorAll('li')) {
    const content = el.firstChild.textContent;

    const span = document.createElement('span');

    span.textContent = content;

    el.firstChild.replaceWith(span);
  }
}

addSpan(tree);

tree.addEventListener('click', function (e) {
  if (e.target.closest('li')) {
    const article = e.target.closest('li');
    const ul = article.querySelector('ul');
    let articelComputed;

    if (ul) {
      articelComputed = getComputedStyle(ul);
    } else {
      return;
    }

    if (articelComputed.getPropertyValue('display') === 'block') {
      article.querySelector('ul').style.display = 'none';
    } else {
      article.querySelector('ul').style.display = 'block';
    }
  }
});
