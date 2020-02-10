'use strict';

const tree = document.querySelector('.tree');

function insertSpan(list) {
  const li = list.querySelectorAll('li');

  for (const item of li) {
    const span = document.createElement('span');

    span.classList.add('tree__anchor');
    item.prepend(span);
    span.append(span.nextSibling);
  }
}

const handleSlidToggle = function(e) {
  const slideToggle = function() {
    e.target.nextSibling.classList.toggle('hide');
  };

  if (e.target.tagName === 'SPAN') {
    slideToggle();
  }
};

insertSpan(tree);
document.addEventListener('click', handleSlidToggle);
