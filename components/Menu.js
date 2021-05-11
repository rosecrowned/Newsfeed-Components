function menuMaker(array){
  // creating element STEP 1
  const menu = document.createElement('div')
  const unordered = document.createElement('ul')

  // structure
  menu.appendChild(unordered)
  // adding class
  menu.classList.add('menu')
  // STEP 2
  array.forEach(element => {
    const list = document.createElement('li')  
    unordered.appendChild(list)
      list.textContent = element
  });
  // STEP 3
  const menubutton = document.querySelector('.menu-button')
// STEP 4 event listener
menubutton.addEventListener('click', event =>{
  menu.classList.toggle('menu--open')
})
// STEP 5 Return
return menu
}

const headMenu = document.querySelector('.header')
headMenu.appendChild(menuMaker(menuItems))