'use strict';

const tree = document.querySelector('.tree');
const listOfFirstLevelHeaders = [];
const listOfSecondLevelHeaders = [];

for (let i = 0; i < tree.children.length; i++) {
  const span = document.createElement('span');

  span.textContent = tree.children[i].firstChild.textContent;
  tree.children[i].firstChild.textContent = '';
  tree.children[i].prepend(span);

  span.addEventListener('click', (e) => {
    span.parentElement.children[1].hidden =
      !span.parentElement.children[1].hidden;
  });
  listOfFirstLevelHeaders.push(tree.children[i].firstChild);
}

for (let i = 0; i < tree.children.length; i++) {
  for (let j = 0; j < tree.children[i].children[0].children.length; j++) {
    const span = document.createElement('span');

    span.textContent =
      tree.children[i].children[0].children[j].firstChild.textContent;
    tree.children[i].children[0].children[j].firstChild.textContent = '';

    span.addEventListener('click', (e) => {
      span.parentElement.children[1].hidden =
        !span.parentElement.children[1].hidden;
    });
    tree.children[i].children[0].children[j].prepend(span);

    listOfSecondLevelHeaders.push(
      tree.children[i].children[0].children[j].firstChild,
    );
  }
}
