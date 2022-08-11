const HamburgerHidden = document.querySelector('.mobile-view');
const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('#sign');
const modal2 = document.querySelector('#sign2');
const modal3 = document.querySelector('#sign3');
const closeButton = document.querySelector('.close');



hamburger.addEventListener('click',function(){
    HamburgerHidden.classList.toggle('hide-hamburger');
    hamburger.classList.toggle('hide-hamburger');


});
modal.addEventListener('click',function(){
    document.querySelector('.BG-Modal').classList.toggle('clicked-close')
})
modal2.addEventListener('click',function(){
    document.querySelector('.BG-Modal').classList.toggle('clicked-close')
})
modal3.addEventListener('click',function(){
    document.querySelector('.BG-Modal').classList.toggle('clicked-close')
})

closeButton.addEventListener('click',function(){
    document.querySelector('.BG-Modal').classList.toggle('clicked-close')
 
})