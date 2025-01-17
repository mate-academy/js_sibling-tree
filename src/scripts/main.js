'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('li > span');

  headers.forEach((header) => {
    header.addEventListener('click', function (e) {
      e.stopPropagation();

      const childList = this.parentElement.querySelector('ul');

      if (childList) {
        childList.classList.toggle('hidden');
      }
    });
  });
});
