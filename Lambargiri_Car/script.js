function myFunction() {
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'Audio/sound.mp3');
    // audio.setAttribute('autoplay', 'Audio/sound.mp3')
    audio.loop = true;
    audio.play();
}
document.addEventListener("click", function () {
    myFunction();
});

// var audioElement=new Audio();
// audioElement.src="Audio/sound.mp3";
// audioElement.play();