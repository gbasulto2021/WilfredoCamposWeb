const d = document;
const menu = d.querySelector('.menu');
const menuBars = d.querySelector('#menu-bars');
const menuLink = d.querySelectorAll('.menu > li');
const menuCat = d.querySelectorAll('#menu-cat > li');
const gallery = d.querySelector('.grid_galery');
const items = d.querySelectorAll('.grid_galery__item');
const imgText = d.querySelector('.img-text');
const closeModal = d.querySelector('.fas.fa-times');
const containerImg = document.querySelector('.container-img');
const modal = d.querySelector('.modal');
const imgContainer = d.querySelector('.img-show');
const copy = d.querySelector('.copy');

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

menuCat.forEach((category)=>{
    
    category.addEventListener('click', (evt)=>{
        evt.preventDefault();
        d.querySelector('#menu-cat > li a.menu-active').classList.remove('menu-active');
        d.querySelector('#menu-cat > li.select').classList.remove('select');
        evt.target.parentElement.classList.add('select');
        evt.target.classList.add('menu-active');
        let cat = evt.target.textContent.toLocaleLowerCase();
        items.forEach((item)=>{
            
            let elements = item.dataset.attribute.toLocaleLowerCase();
            
            if (cat === elements) {
                item.classList.remove('inactivo');
                
            } else {
                item.classList.add('inactivo');
                
            }
            if(cat === 'todos'){
                
                item.classList.remove('inactivo');
            }
            
            
        });
       
    });
    
    
});


items.forEach((item)=>{
    item.addEventListener('click', evt=> addImg(evt.target.getAttribute('src'), evt.target.getAttribute('alt'), item.lastElementChild.textContent));
    
});

const addImg = (srcImg, altImg, textModal)=>{
    modal.classList.toggle('move');
        imgContainer.src = srcImg;
        copy.innerHTML = altImg;
        imgText.innerHTML = textModal;
  
};

closeModal.addEventListener('click', ()=>{
    modal.classList.toggle('move');
})







