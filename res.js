 const toggleButton = document.getElementById("toggle-button");
 const naviList = document.getElementById("navi-list");
 const navListContainer = document.getElementById("nav-container")
 const menuBtn = document.getElementById("toggle-button")
 const closeBtn = document.getElementById("close-button")

menuBtn.addEventListener("click", displaynavListContainer);
 
 function displaynavListContainer(){
    navListContainer.classList.add("show");
 }

 closeBtn.addEventListener("click", closenavListContainer);
 
 function closenavListContainer(){
    navListContainer.classList.remove("show")
 }
