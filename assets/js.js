const burg = document.querySelector(".burg");
const subnav = document.querySelector(".subnav-container");
const Close = document.querySelector("#close-burg");
const span = document.getElementsByTagName('span');


burg.addEventListener('click', () => {
    subnav.classList.toggle('active');
});

Close.addEventListener('click', () => {
    subnav.classList.remove('active');
});


// scroll to change navbar

document.addEventListener('scroll', ()=>{

    if (window.scrollY > 800){
        span.classList.toggle('activate');
        burg.classList.toggle('activate');
    } else{
        span.classList.remove('activate');
        burg.classList.remove('activate');
    }
})

