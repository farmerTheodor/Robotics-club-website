

var currentMonth = 1;

function changeToSlide(slideToChangeTo) {
    var i;
    var currentSlides = document.getElementsByClassName("timeline");
    if (slideToChangeTo >= currentSlides.length){
        currentMonth = currentMonth - 1;
        return;
    }
    currentSlides[slideToChangeTo].style.left = "100%"; 
    for(i = 0; i < currentSlides.length; i = i + 1){
        currentSlides[i].style.display = "none";
    }
   
currentSlides[slideToChangeTo].style.display = "block";
    currentSlides[slideToChangeTo].style.transform = "translate(100,0)";
    
}

function nextPrevSlide( nextPrev ) {
    currentMonth = currentMonth + nextPrev;
    changeToSlide(currentMonth);
}


nextPrevSlide(0);


