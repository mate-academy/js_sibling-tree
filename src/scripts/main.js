'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const treeItems = document.querySelectorAll(".tree li");

  treeItems.forEach((item) => {
    const childrenContainer = item.querySelector("ul");
    if (childrenContainer) {
      childrenContainer.style.display = "none";

      const textContent = item.firstChild.textContent.trim();
      const span = document.createElement("span");
      span.textContent = textContent;

      item.firstChild.replaceWith(span);

      span.addEventListener("click", (e) => {
        e.stopPropagation();
        const isVisible = childrenContainer.style.display === "block";
        childrenContainer.style.display = isVisible ? "none" : "block";
      });
    }
  });
});

