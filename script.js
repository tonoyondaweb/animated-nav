const menuBar = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('item-1');
const nav2 = document.getElementById('item-2');
const nav3 = document.getElementById('item-3');
const nav4 = document.getElementById('item-4');
const nav5 = document.getElementById('item-5');

function toggleNav(){
    menuBar.classList.toggle('change');
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.add('overlay-slide-left');
        overlay.classList.remove('overlay-slide-right');
    }
    else{
        overlay.classList.add('overlay-slide-right');
        overlay.classList.remove('overlay-slide-left');
    }
}
// Event listeners
menuBar.addEventListener('click',toggleNav);