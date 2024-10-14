'use strict';

const allLi = document.querySelector('.tree li');

for (const li of allLi) {
  if (li.children.length !== 0) {
    // <li> those haven't elements inside must be ignored
    const span = document.createElement('span'); // we need just li those have.

    // Create element span and insert it in every <li> we get in this condition
    li.prepend(span); // span tag has a text like a 'neighbor' sibling
    span.append(span.nextSibling); // move text inside in span

    span.addEventListener('click', function (e) {
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
      // we exchange meaning of properties 'hidden'
      // on true at false and otherwise
    });
  }
}
