const menu=document.querySelector("#mToggle");
const menuList=document.querySelector(".nList");

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
});

var counter=1;
setInterval(function(){
    document.getElementById('r'+counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},4000);

/* 5x1 (articulate in between) ///
const menu = document.querySelector('mToggle');
const menuList= document.querySelector('#nList');

menu.addEventListenter('click',function(){
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
});

const menu=document.querySelector('.mToggle');
const menu=document.querySelector('#nList');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
})

Q: what does the classList method? allows the 
css selector to use toggle method and switch back 
and forth? 
A1: basically yes, there are many built in objects within objects,
classList is in the Element Object. Could also be called an interface?

const menu=document.querySelector('mToggle');
const menuList=document.querySelector('#nList');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
})

var count=1;
setInterval(funcion(){
    document.getElementById('r'+count).checked.true;
    count++;
    if(count>4){
        count=1;
    }
},5000);

*/