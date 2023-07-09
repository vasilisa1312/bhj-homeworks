let menuLink = document.getElementsByClassName("menu__link")

for(let i = 0; i < menuLink.length; i++){
    menuLink[i].onclick = menuOpen; 
}

function menuOpen() {
    const activeItem = this.closest('li');
    const subMenuActive = activeItem.querySelector('.menu_sub');
  
    if (subMenuActive) {
      if (!(subMenuActive.matches('.menu_active'))) closeMenu();
      subMenuActive.classList.toggle('menu_active');
      return false;
    }
    closeMenu();
  }


  function closeMenu() {
    const subMenu = document.querySelectorAll('.menu_sub');
    for (let item of subMenu) {
      if (item.matches('.menu_active')) {
        item.classList.remove('menu_active');
      }
    }
  }