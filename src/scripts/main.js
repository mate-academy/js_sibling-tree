'use strict';

const tree = document.querySelector('.tree');

const listItems = [...tree.querySelectorAll('li')];

listItems.forEach((elem) => {
  const firstText = elem.firstChild;
  const span = document.createElement('span');

  span.textContent = `${firstText.textContent}`;

  elem.replaceChild(span, firstText);
});

// eslint-disable-next-line no-shadow
function clickOnSpan(event) {
  const spanTarget = event.target.closest('span');

  if (spanTarget) {
    const list = spanTarget.nextElementSibling;

    const computedStyles = getComputedStyle(list);

    if (computedStyles.display === 'none') {
      list.style.display = 'block';

      return;
    }

    list.style.display = 'none';
  }
}

tree.addEventListener('click', clickOnSpan);
