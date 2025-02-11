document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree li');

  items.forEach((item) => {
    const title = document.createElement('span');

    title.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(title);

    title.addEventListener('click', () => {
      const sublist = item.querySelector('ul');

      if (sublist) {
        sublist.hidden = !sublist.hidden;
      }
    });
  });
});
