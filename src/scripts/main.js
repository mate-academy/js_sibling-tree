'use strict';

const tree = document.querySelector('.tree');

// Define node type checks
const isElementNode = (node) => node instanceof Element;
const isTextNode = (node) => node instanceof Text;
const isNonEmptyText = (node) =>
  isTextNode(node) && node.nodeValue.trim() !== '';
const isUnorderedList = (node) => node.tagName === 'UL';

// Helper function: get text and elements only
function getSignificantChildNodes(item) {
  return Array.from(item.childNodes).filter(
    (node) => isElementNode(node) || isNonEmptyText(node),
  );
}

// Wrap text nodes with a <span class="collapsible">
function wrapTextNodeInSpan(textNode) {
  const wrapper = document.createElement('span');

  wrapper.classList.add('collapsible');

  textNode.parentNode.insertBefore(wrapper, textNode);
  wrapper.appendChild(textNode);
}

// Recursively wrap headers of the nested lists
function wrapListItemHeaders(listElement) {
  // Select only direct children with tag 'li'
  const listItems = Array.from(listElement.querySelectorAll(':scope > li'));

  listItems.forEach((listItem) => {
    const filteredNodes = getSignificantChildNodes(listItem);

    if (filteredNodes.length > 1) {
      const textNodes = filteredNodes.filter(isTextNode);
      const ulNodes = filteredNodes.filter(isUnorderedList);

      // Wrap sublists headers with span.collapsible
      textNodes.forEach(wrapTextNodeInSpan);

      // Recursively run the same process for all the nested ul elements
      ulNodes.forEach(wrapListItemHeaders);
    }
  });
}

wrapListItemHeaders(tree);

// Toggle visibility of nested lists when clicking headers
tree.addEventListener('click', (e) => {
  if (e.target.classList.contains('collapsible')) {
    const relatedList = e.target.nextElementSibling;

    if (relatedList && isUnorderedList(relatedList)) {
      relatedList.hidden = !relatedList.hidden;
    }
  }
});
