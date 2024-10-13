'use strict';

const allLi = document.querySelector('.tree').querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const li of allLi) {
  if (li.children.length !== 0) {
    // <li> those haven't elements inside must be ignored
    const span = document.createElement('span'); // we need just li those have.

    // Create element span and insert it in every <li> we get in this condition
    li.prepend(span); // span tag has a text like a 'neighbor' sibling
    span.append(span.nextSibling); // move text inside in span
  }
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    // we want event work
    return; // just at the span tag, none anythink else
  } // we want to hide another 'li' those aren't the title

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  // we exchange meaning of properties 'hidden' on true at false and otherwise
});
