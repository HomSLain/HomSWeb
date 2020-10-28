//Menu items
const Home= document.getElementById("Home");
const Projects= document.getElementById("Projects");
const Tools=document.getElementById("Tools");
const About=document.getElementById("About");
//containers
const home_container=document.getElementById("home_container");
const projects_container=document.getElementById("projects_container");
const tools_container=document.getElementById("tools_container");
const about_container=document.getElementById("about_container");

const toggleMain=(container)=>{
    const main= document.querySelector(".main");
    main.classList.toggle("main");
    main.classList.toggle("hidden");
    container.classList.toggle("hidden");
    container.classList.toggle("main");
}

const menu_listener= ()=>{
    Home.addEventListener("click",(e)=>{
        e.preventDefault()
        if(!home_container.classList.contains("main")){
           toggleMain(home_container);
        }
    });

    Projects.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!projects_container.classList.contains("main")){
            toggleMain(projects_container);
        }
    });

    Tools.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!tools_container.classList.contains("main")){
            toggleMain(tools_container);
        }
    });

    About.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!about_container.classList.contains("main")){
            toggleMain(about_container);
        }
    });
}

const links={
    Home,
    Projects,
    Tools,
    About
}

export {menu_listener,links};