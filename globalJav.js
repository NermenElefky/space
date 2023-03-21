let menu_icon = document.querySelector(".links_icon");
let backdrop_links = document.querySelector(".backdrop_links");
let links = document.querySelector(".links");
let close = document.querySelector(".close svg");
// show the backdrop when clicking on the menu_icon
menu_icon.addEventListener("click",()=>{
    backdrop_links.style.width = 100+"%";
    links.style.right = 0 +"px";
    links.style.transitionDuration = .6 +"s"
})
// close the links menu
close.addEventListener("click",()=>{
    backdrop_links.style.width = 0+"%";
    links.style.right = -300 +"px";
    links.style.transitionDuration = .6 +"s"
    // return the transition to zero again
    setTimeout(() => {
        links.style.transitionDuration = 0 +"s"
    }, 30);
})
backdrop_links.addEventListener("click",()=>{
    backdrop_links.style.width = 0+"%";
    links.style.right = -300 +"px";
    links.style.transitionDuration = .6 +"s";
    // return the transition to zero again
    setTimeout(() => {
        links.style.transitionDuration = 0 +"s"
    }, 30);
})
