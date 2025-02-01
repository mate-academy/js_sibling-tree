'use strict';

// write code here
const ul = document.getElementsByClassName('tree');
const liElements = document.querySelectorAll('li');

for (const li of liElements) {
  if (li.querySelector('ul')) {

    const textSpan = document.createElement("span");
    textSpan.textContent = li.firstChild.textContent.trim();
    li.firstChild.textContent = "";
    li.prepend(textSpan);

    textSpan.addEventListener('click', () => {
      const listOfElements = li.querySelector('ul').children;
      for (const element of listOfElements) {
        if (element.style.display === "none") {
          element.style.display = "block"
        } else {
          element.style.display = "none";
        }
      }
    })
  }
}
