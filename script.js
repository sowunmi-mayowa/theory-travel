const mobileNav = document.querySelector(".nav-mobile");
const button = document.querySelector("svg");

button.addEventListener("click", toggleNav);

function toggleNav(){

    if(mobileNav.style.right == "-250px"){
        mobileNav.style.right = "0"
    }else{
         mobileNav.style.right = "-250px"
    }
}