const categoriesEl = document.querySelector('#categories');

const showСategoriesItemInfo = (item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
};

const showCategoriesElInfo = (list) => {
  console.log(`Number of categories: ${list.children.length}`);

  for (const children of list.children) {
    showСategoriesItemInfo(children);
  }
};

showCategoriesElInfo(categoriesEl);
