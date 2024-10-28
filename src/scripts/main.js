const tree = document.querySelector('.tree');

tree.addEventListener('click', (branch) => {
  if (branch.target.tagName === 'LI') {
    const subTree = branch.target.querySelector('ul');

    if (subTree !== null) {
      if (subTree.style.display === '' || subTree.style.display === 'block') {
        subTree.style.display = 'none';
      } else {
        subTree.style.display = 'block';
      }
    }
  }
});
