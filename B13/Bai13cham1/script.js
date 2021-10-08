var slideIndex = 1;
slideShow();
setInterval(function(){
    slideIndex=slideIndex + 1;
    slideShow();
}, 5000)

function slideShow(){
    var slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName('dot');
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    if(slideIndex < 1)
    {
        slideIndex=slides.length;
    }
    for (var i=0; i< slides.length; i++)
    {
        slides[i].classList.remove('active');
    }
    for (var i=0;i<dots.length; i++)
    {
        dots[i].classList.remove('active-dot');
    }
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add('active-dot');
}

document.getElementById('next').addEventListener('click', function(){
    slideIndex= slideIndex + 1;
    slideShow();
})
document.getElementById('prev').addEventListener('click', function(){
    slideIndex=slideIndex - 1;
    slideShow();
})
function activeDot(n){
    slideIndex = n;
    slideShow();
}