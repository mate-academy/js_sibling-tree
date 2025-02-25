'use strict';

window.onload = () => {
  const headers = document.querySelectorAll('li');

  headers.forEach((header) => {
    const sublist = header.querySelector('ul');

    if (sublist) {
      const span = document.createElement('span');

      span.textContent = header.childNodes[0].textContent.trim();

      header.removeChild(header.childNodes[0]);

      header.insertBefore(span, sublist);

      sublist.style.display = 'none';

      span.addEventListener('click', (e) => {
        if (sublist.style.display === 'none') {
          sublist.style.display = 'block';
        } else {
          sublist.style.display = 'none';
        }

        e.stopPropagation();
      });
    }
  });
};
