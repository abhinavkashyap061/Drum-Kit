
let numberOfDrums = document.querySelectorAll(".drum").length;

// listening for click event
// and playing sound detecting the textContent
for(let i=0; i<numberOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.textContent);

        // animating
        buttonAnimation(this.textContent);
    });
}

// adding keyboard event listener to the whole document/web page
// event is passed into the function executed
// event tells us about the details what exactly triggered the eventListener
document.addEventListener("keydown", function (event) {

    // playing sound detecting key pressed
    // event.key tells us what key was pressed
    makeSound(event.key);

    // animating
    buttonAnimation(event.key)

})

// make sound function
// different sounds for different letters
function makeSound(key) {

    switch(key){

        case("w"):
            let audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();
            break;

        case("a"):
            let audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();
            break;

        case("s"):
            let audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
            break;

        case("d"):
            let audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            break;

        case("j"):
            let audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
            break;

        case("k"):
            let audioK = new Audio("sounds/crash.mp3");
            audioK.play();
            break;

        case("l"):
            let audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
            break;

    }

}

function buttonAnimation (currentKey) {

    let activeButton = document.querySelector("."+currentKey);

    // adds the .pressed class the button
    activeButton.classList.add("pressed");

    //but we want to remove the class after a delay and 
    // not let it be there for forever
    // for that we will use setTimeout()
    // it accepts has two parameters, 1st is the function, 2nd is the time , after how much time you want to execute the function

    setTimeout(
    // function you want to execute after time-interval
    function(){
        activeButton.classList.remove("pressed");
    },
    // time parameter
    500
    )

}