'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    if (li.querySelector('ul')) {
      li.style.cursor = 'pointer';

      li.addEventListener('click', (e) => {
        e.stopPropagation();

        const sublist = li.querySelector('ul');

        if (sublist) {
          sublist.style.display =
            sublist.style.display === 'none' ? 'block' : 'none';
        }
      });
      li.querySelector('ul').style.display = 'none';
    }
  });
});
