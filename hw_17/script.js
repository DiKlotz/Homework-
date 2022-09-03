let allLastLi = document.querySelectorAll(`ul > li:last-of-type`)
    allLastLi.forEach((li) => li.classList.add(`last`));

function setFirstItemClassName(level) {
  let allUl = `ul.root`;
  while (level !== 1) {
    allUl += `> li > ul`;
    level--;
  }
    
  let allFirstLi = document.querySelectorAll(`${allUl}>li:first-of-type`);
      allFirstLi.forEach((li) => li.classList.add(`first`));
}

setFirstItemClassName(2);