'use strict';

// Аind all menu subtitles, wrap them in a <span> tag,
// and apply styling (red color of the text)
document.querySelectorAll('ul > li').forEach((listItem) => {
  const hasSubmenu = listItem.querySelector('li');

  if (hasSubmenu) {
    const span = document.createElement('span');

    span.textContent = listItem.firstChild.textContent.trim();

    listItem.firstChild.replaceWith(span);

    span.style.color = 'red';
  }
});

// Find all first-level descendants of the element adjacent to the <span>
document.querySelectorAll('span').forEach((span) => {
  span.addEventListener('click', () => {
    const sibling = span.nextElementSibling;

    if (sibling.style.display === 'none' || sibling.style === '') {
      sibling.style.display = 'block';
    } else {
      sibling.style.display = 'none';

      sibling.querySelectorAll('ul').forEach((listItem) => {
        listItem.style.display = 'none';
      });
    }
  });
});
