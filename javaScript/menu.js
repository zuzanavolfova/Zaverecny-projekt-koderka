function menu (){
    let menu=document.querySelector('.menu__list')
    if (menu.style.display === 'none')
        {
        menu.style.display='block';
        } else {
            menu.style.display='none';
        }
}