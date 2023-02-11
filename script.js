var clickMenu = document.getElementById("click_menu");
var menu = document.getElementById("menu");
var fecharMenu = document.getElementById("fecharMenu");
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var animes = document.getElementById("animes");

clickMenu.addEventListener("click", function(){
    menu.style.display = "flex";
    header.style.backgroundColor ="rgba(0, 0, 0, 0.800)";
    
});
fecharMenu.addEventListener("click",function(){
    menu.style.display = "none";
});

logo.addEventListener("click",function(){
    window.location = "index.html";
});

animes.addEventListener("click",function(){
    window.location = "animes.html";
});