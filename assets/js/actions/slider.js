const slider= document.getElementsByClassName("projects-content");
const slider_back=document.getElementById("back");
const slider_next=document.getElementById("next");
let index=0;
const slider_listener=()=>{
    slider_back.addEventListener('click',(e)=>{
        e.preventDefault();
        if(index-1>=0){
            slider[index].classList.toggle('hidden');
            slider[index-1].classList.toggle('hidden');
            index-=1;
        }else{
            slider[index].classList.toggle('hidden');
            index=slider.length-1;
            slider[index].classList.toggle('hidden');
        }        
    });

    slider_next.addEventListener('click',(e)=>{
        e.preventDefault();
        if(index<slider.length-1){
            slider[index].classList.toggle('hidden');
            slider[index+1].classList.toggle('hidden');
            index+=1;
        }else{
            slider[index].classList.toggle('hidden');
            index=0;
            slider[index].classList.toggle('hidden');
        }
    })
}

export {slider_listener};