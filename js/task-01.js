const categoriesEl = document.querySelector('#categories');

const show–°ategoriesItemInfo = (item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
};

const showCategoriesElInfo = (list) => {
  console.log(`Number of categories: ${list.children.length}`);

  for (const children of list.children) {
    show–°ategoriesItemInfo(children);
  }
};

showCategoriesElInfo(categoriesEl);
