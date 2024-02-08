const navicon=document.getElementById("navicon");
const NavLinks=document.getElementsByClassName("TopBar")[0];
navicon.addEventListener('click',()=>{
    NavLinks.classList.toggle('active');
})