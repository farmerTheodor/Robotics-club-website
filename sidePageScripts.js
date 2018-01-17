

var currentMonth = 0;

function changeToSlide(slideToChangeTo) {
    var i;
    var currentSlides = document.getElementsByClassName("timeline");
    if (slideToChangeTo >= currentSlides.length){
        currentMonth = currentMonth - 1;
        return;
    }
    for(i = 0; i < currentSlides.length; i = i + 1){
        currentSlides[i].style.display = "none";
    }
    currentSlides[slideToChangeTo].style.display = "block";
    
}

function nextPrevSlide( nextPrev ) {
    currentMonth = currentMonth + nextPrev;
    changeToSlide(currentMonth);
}


nextPrevSlide(0);


