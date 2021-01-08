'use strict';

function spanner(el) {
  const headerText = el.firstChild.textContent.trim();
  const span = document.createElement('span');

  el.firstChild.remove();
  span.innerText = headerText;
  el.prepend(span);
}

const liHeaders = document.querySelectorAll('.tree > li');
const subLiHeaders = document.querySelectorAll('.tree > li > ul > li');
const list = document.querySelector('.tree');

liHeaders.forEach(spanner);

subLiHeaders.forEach(spanner);

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    if (!e.target.nextSibling.style.display) {
      e.target.nextSibling.style.display = 'none';

      return;
    }

    e.target.nextSibling.style.display = '';
  }
});
