const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content-s");

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')})
        tab.classList.add('active');

        var line = document.querySelector(".line");
        // line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    })
})





// ! CAR ICONS

const icons = document.querySelectorAll(".icon-btn");
const option_one = document.querySelectorAll(".option-display");


icons.forEach((icon,index)=>{
    icon.addEventListener('click',(e)=>{
        icons.forEach(icon=>{icon.classList.remove('active')})
        icon.classList.add('active');


        option_one.forEach(option=>{option.classList.remove('active')});
        option_one[index].classList.add('active');
    })
})
