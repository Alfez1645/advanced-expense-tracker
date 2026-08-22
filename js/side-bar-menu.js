const sidebarmenubtn = document.querySelector(".sidebar-menu-btn");
const sidemenu = document.querySelector("#side-menu");
const menuCloseBtn = document.querySelector(".menu-logo-icon i");

sidebarmenubtn.addEventListener("click" ,()=>{
    sidemenu.classList.add("side-menu-open");
});
menuCloseBtn.addEventListener("click" ,()=>{
    sidemenu.classList.remove("side-menu-open");
});