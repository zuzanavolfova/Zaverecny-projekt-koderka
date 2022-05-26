function menu (){
    let menu=document.querySelector('.menu-mobile__list')
    let pokus=document.querySelector('.glide__arrow')
    if (menu.style.display === 'none')
        {
        menu.style.display='block';
        pokus.style.zIndex='-1';
        } else {
            menu.style.display='none';
            pokus.style.zIndex='1';

        }
}