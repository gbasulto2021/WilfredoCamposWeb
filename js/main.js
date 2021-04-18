const d = document;
const menu = d.querySelector('.menu');
const menuBars = d.querySelector('#menu-bars');
const menuLink = d.querySelectorAll('.menu > li');
const menuCat = d.querySelector('#menu-cat');
const items = d.querySelectorAll('.grid_galery .grid_galery__item');

menuBars.addEventListener('click', ()=>{
    menu.classList.toggle('menu-is-active');
    menuLink.forEach((list)=>{
        list.classList.toggle('display');
        
    });
   
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('menu-is-active');
    menuLink.forEach((list)=>{
        list.classList.remove('display');
        
    });    
});

menuCat.addEventListener('click', (e)=>{
    e.preventDefault();
    let textFilter = e.target.textContent.toLowerCase();
    items.forEach((item)=> {
        
        if(item.textContent.toLowerCase().includes(textFilter)){
            item.classList.remove('inactivo');
        }else{
            item.classList.add('inactivo');
        }
    });
    if(textFilter==='todos'){
        items.forEach((item)=> {
            item.classList.remove('inactivo');
        });
    }
});