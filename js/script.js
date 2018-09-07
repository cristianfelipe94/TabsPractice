let imgWrapper = document.querySelectorAll ('.img');
let leftArrow = document.getElementById ('arrow-left');
let rightArrow = document.getElementById ('arrow-right');
let current = 0;

//Clear all the images.
function reset () {
    for(let i = 0; i < imgWrapper.length ; i++) {
        imgWrapper[i].style.display = 'none';
    }
}  

//init the slider.
function startSlide (){
    reset ();
    imgWrapper[0].style.display = 'block'
}

//Show preview.
function slideLeft (){
    reset();
    imgWrapper[current - 1].style.display = 'block';
    current--;
}

//Show next.
function slideRight (){
    reset();
    imgWrapper[current + 1].style.display = 'block';
    current++;
}
//Left Arrow click.
leftArrow.addEventListener('click', function (){
    if (current === 0){
        current = imgWrapper.length;
    }
    slideLeft();
});

//Right Arrow click.
rightArrow.addEventListener('click', function (){
    if (current === imgWrapper.length-1){
        current =- 1;
    }
    slideRight();
});

startSlide();