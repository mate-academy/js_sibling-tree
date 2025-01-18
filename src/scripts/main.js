'use strict';

// write code here
const liList = document.querySelectorAll("li");


for (const li of liList) {
  // console.log(li);
  const liFirstChild = li.firstChild;

  const newSpan = document.createElement("span");

  newSpan.textContent = liFirstChild.textContent;

  li.replaceChild(newSpan, liFirstChild);

  newSpan.addEventListener("click", function() {
    const oldUl = newSpan.nextElementSibling;

    if (oldUl !== null) {
      if (oldUl.style.display === "none") {
        oldUl.style.display = "block";
      } else {
        oldUl.style.display = "none";
      }
    }
  });
}
