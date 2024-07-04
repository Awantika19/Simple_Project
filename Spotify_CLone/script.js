console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('Audio/1.mpeg');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Salam-e-Ishq", filePath: "Audio/1.mpeg" , coverPath: "photos/cover1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/2.mp3" , coverPath: "photos/cover2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/3.mp3" , coverPath: "photos/cover3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/4.mp3" , coverPath: "photos/cover4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/5.mp3" , coverPath: "photos/cover5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/6.mp3", coverPath: "photos/cover6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/7.mp3" , coverPath: "photos/cover7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/8.mp3" , coverPath: "photos/cover8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/9.mp3", coverPath: "photos/cover9.jpg"},
    {songName: "Salam-e-Ishq", filePath: "Audio/9.mp3", coverPath: "photos/cover9.jpg"},
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementBytagName('img')[0].src= songs[i].coverPath;
    element.getElementByClassName('songName')[0].innerText= songs[i].songName;
})

    
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    // myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})