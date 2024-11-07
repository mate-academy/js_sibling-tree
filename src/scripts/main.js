'use strict';

'use strict';

document.querySelectorAll('.tree > li').forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();

  item.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    const subList = item.querySelector('ul');

    if (subList) {
      subList.style.display =
        subList.style.display === 'none' ? 'block' : 'none';
    }
  });
});
