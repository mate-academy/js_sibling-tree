'use strict';

// Select headlines
const headlines = document.querySelectorAll('.tree > li, .tree > li > ul > li');

// Wrapping headlines into span tag
headlines.forEach((headline) => {
  const spanTag = document.createElement('span');

  spanTag.textContent = headline.firstChild.textContent.trim();
  headline.replaceChild(spanTag, headline.firstChild);
});

document.addEventListener('click', (e) => {
  const clicked = e.target;

  if (clicked.matches('.tree > li > span, .tree > li > ul > li > span')) {
    const parentList = clicked.parentElement;
    const childList = parentList.querySelector('ul');

    if (childList) {
      // Allow to expand and 'condense' list.
      childList.style.display =
        childList.style.display === 'none' ? 'block' : 'none';
    }
  }
});
