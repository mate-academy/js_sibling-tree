'use strict';

const tree = document.querySelector('.tree');

const items = Array.from(tree.children);

function spanHeadings(list) {
  list.forEach((item) => {
    const heading = item.firstElementChild; // li first

    if (!heading || heading.tagName !== 'SPAN') {
      const span = document.createElement('span');

      span.textContent = item.firstChild.textContent.trim();

      item.replaceChild(span, item.firstChild);
    }

    const sublist = item.querySelector('ul');

    if (sublist) {
      spanHeadings(Array.from(sublist.children));
    }
  });
}

spanHeadings(items);

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', function (e) {
    const nestedList = this.parentElement.querySelector('ul');

    if (nestedList) {
      nestedList.style.display =
        nestedList.style.display === 'none' ? 'block' : 'none';
    }

    e.stopPropagation();
  });
});

// tree.addEventListener('click', function (e) {
//   if (e.target.tagName === 'SPAN') {
//     const nestedList = e.target.parentElement.querySelector('ul');

//     if (nestedList) {
//       nestedList.style.display =
//         nestedList.style.display === 'none' ? 'block' : 'none';
//     }

//     e.stopPropagation();
// });
