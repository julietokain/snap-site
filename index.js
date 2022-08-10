// id description
let openNavBar = document.getElementById("openNav"),
    closeNavBar = document.getElementById("closeNav"),
    navContain = document.getElementById("navContain");

openNavBar.addEventListener("click", function(){
    navContain.style.right = "0%";
    navContain.style.transition = ".5s";
});

closeNavBar.addEventListener("click", function(){
    navContain.style.right = "100%";
    navContain.style.transition = ".5s";
});
