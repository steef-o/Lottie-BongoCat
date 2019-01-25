"use strict";
//Get animation container from DOM.
const animationContainer = document.getElementById('bongo-cat');

//Get music notes from DOM.
const note1_c = document.getElementById('note1_c');
const note2_d = document.getElementById('note2_d');
const note3_e = document.getElementById('note3_e');
const note4_f = document.getElementById('note4_f');
const note5_g = document.getElementById('note5_g');
const note6_a = document.getElementById('note6_a');
let mobilekey = "";

document.getElementById("c-note-button").addEventListener("click", function () {
    mobilekey = "a";
    selector(mobilekey);
});
document.getElementById("d-note-button").addEventListener("click", function() {
    mobilekey = "s";
    selector(mobilekey);
});
document.getElementById("e-note-button").addEventListener("click", function() {
    mobilekey = "d";
    selector(mobilekey);
});
document.getElementById("f-note-button").addEventListener("click", function() {
    mobilekey = "f";
    selector(mobilekey);
});
document.getElementById("g-note-button").addEventListener("click", function() {
    mobilekey = "j";
    selector(mobilekey);
});
document.getElementById("a-note-button").addEventListener("click", function() {
    mobilekey = "k";
    selector(mobilekey);
});



// Init lottie animation.
const bongoCat = lottie.loadAnimation({
        container: animationContainer, // the dom element that will contain the animation.
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        path: 'media/bongo_cat.json' // Async, the path to the animation json.
});

// Listen for animation to be initialized.
bongoCat.addEventListener('data_ready', function () {
    //Listen for keyboard input (a,s,d,f,j,k = valid inputs).
   window.addEventListener('keypress', function (e) {
       selector(e.key);

    });

});

// Helper function to play notes.
// setting currentTime to 0 allows us to immediately restart animation.
function playNote(note) {
    if(note.currentTime !== 0) {
        note.currentTime = 0;
    }
    note.play();
}

function selector (input) {
    bongoCat.setSpeed(.25);
    switch(input){
        case "a":
            bongoCat.playSegments([1,3]);
            playNote(note1_c);
            break;
        case "s":
            bongoCat.playSegments([3,5]);
            playNote(note2_d);
            break;
        case "d":
            bongoCat.playSegments([5,7]);
            playNote(note3_e);
            break;
        case "f":
            bongoCat.playSegments([7,9]);
            playNote(note4_f);
            break;
        case "j":
            bongoCat.playSegments([9,11]);
            playNote(note5_g);
            break;
        case "k":
            bongoCat.playSegments([11,13]);
            playNote(note6_a);
            break;
        default:
            console.log("invalid key");
            break;
    }
}