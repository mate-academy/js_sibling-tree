'use strict';

const tree = document.querySelector('.tree');

const toggleVisibility = (element) => {
  const children = element.querySelectorAll(':scope > ul');

  children.forEach((child) => {
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else {
      child.style.display = 'none';
    }
  });
};

const setupTree = (node) => {
  const listItems = node.querySelectorAll('li');

  listItems.forEach((li) => {
    // Обгортаємо текст в span
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);

    // Ховаємо дочірні списки
    const childList = li.querySelector('ul');

    if (childList) {
      childList.style.display = 'none';

      // Додаємо подію кліку
      span.style.cursor = 'pointer';
      span.addEventListener('click', () => toggleVisibility(li));
    }
  });
};

// Викликаємо функцію
setupTree(tree);
