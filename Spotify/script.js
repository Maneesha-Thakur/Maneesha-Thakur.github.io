
let songIndex=0

let audioElement=new Audio('song/1.mp3')
let masterPlay =document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs=[
    {songName: "wariyo = Mortal [NCS Release] ",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName: "Cielo",filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName: "Deaf kev",filePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName: "Different Heaven &",filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songName: "Janji-Heros Tonight",filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
    {songName: "Rabba-Slam-e-Ishaq",filePath:"song/6.mp3",coverPath:"cover/6.jpg"},
    {songName: "Sakhiyan",filePath:"song/7.mp3",coverPath:"cover/7.jpg"},
    {songName: "SBhhula dena",filePath:"song/8.mp3",coverPath:"cover/8.jpg"},
    {songName: "Slam-e-Ishaq",filePath:"song/9.mp3",coverPath:"cover/9.jpg"},
]

songItems.forEach((element,i)=>{

    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle') 
        gif.style.opacity=0

    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
  
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myProgressBar.value=progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100
})
const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')

element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.currentTime=0
        // console.log(e.target)
        audioElement.src=`song/${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName
        audioElement.play()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
    } else {
        songIndex = 0; // Loop back to the first song
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex--;
    } else {
        songIndex = songs.length - 1; // Loop to the last song
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});


// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>=8){
//         songIndex +=1
//     }
//     audioElement.src=`song/${songIndex+1}.mp3`
  
//     audioElement.currentTime=0
//     audioElement.play()
//     masterPlay.classList.remove('fa-play-circle')
//     masterPlay.classList.add('fa-pause-circle')
// })

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex<=0){
//         songIndex -=1
//     }
//     audioElement.src=`song/${songIndex+1}.mp3`
    

//     audioElement.currentTime=0
//     audioElement.play()
//     masterPlay.classList.remove('fa-play-circle')
//     masterPlay.classList.add('fa-pause-circle')
// })

