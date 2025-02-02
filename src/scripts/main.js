'use strict';

const liList = document.querySelectorAll('li'); //додав всі елем до файлу

//перебираю елементи щоб взяти перший з них в якому міститься хедер
for (const li of liList) {
  const lifirstChild = li.firstChild;

  //створюю змінну спан і додаю в неї назву хедера
  const newSpan = document.createElement('span');
  newSpan.textContent = lifirstChild.textContent;

  //замінив одну змінну на іншу
  li.replaceChild(newSpan, lifirstChild);
  //додвю обробник подій для знаємодії користувача зі списком
  newSpan.addEventListener('click', (e) => {
    const childElement = newSpan.nextElementSibling;
    if (childElement !== null) {
      if (childElement.style.display === 'none') {
        childElement.style.display = 'block'
      } else {
        childElement.style.display = 'none'
      }
    }
  })
}
