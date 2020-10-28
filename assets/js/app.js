import {menu_listener,links} from "./actions/menu.js"; 
import {slider_listener} from "./actions/slider.js";

var hamburger_menu = document.querySelector(".hamburger-menu");
var container= document.querySelector(".container");

const toggleDisabled=()=>{
    links.Home.classList.toggle("disabled");
    links.Tools.classList.toggle("disabled");
    links.Projects.classList.toggle("disabled");
    links.About.classList.toggle("disabled");
}

hamburger_menu.addEventListener("click",()=>{
    container.classList.toggle("active");
    toggleDisabled();
});

menu_listener();
slider_listener();
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-about', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
