var clickMenu = document.getElementById("click_menu");
var menu = document.getElementById("menu");
var fecharMenu = document.getElementById("fecharMenu");
var header = document.getElementById("header");

clickMenu.addEventListener("click", function(){
    menu.style.display = "flex";
    header.style.backgroundColor ="rgba(0, 0, 0, 0.800)";
    
});
fecharMenu.addEventListener("click",function(){
    menu.style.display = "none";
});
