let songs = [
    { Songname: 'Faalse', Coverpath: 'images/cover1.jfif', filepath: 'Audio Files/Faasle.mp3' },
    { Songname: 'Aaj Mohabbat', Coverpath: 'images/cover4.jfif', filepath: 'Audio Files/Aaj Mohabbat.mp3' },
    { Songname: 'Haareya', Coverpath: 'images/cover3.jfif', filepath: 'Audio Files/Haareya.mp3' },
    { Songname: 'Kho Gaye', Coverpath: 'images/cover2.jfif', filepath: 'Audio Files/Kho Gaye.mp3' },
    { Songname: 'Kesariya', Coverpath: 'images/cover5.jfif', filepath: 'Audio Files/Kesariya.mp3' },
    { Songname: 'Maan Meri Jaan', Coverpath: 'images/cover6.jfif', filepath: 'Audio Files/Maan Meri Jaan.mp3' },
    { Songname: 'Jo Tu Na Mila Mujhe', Coverpath: 'images/cover7.jfif', filepath: 'Audio Files/Jo Tu Na Mila Mujhe.mp3' },
]

let songindex = 0;
let songItem = Array.from(document.getElementsByClassName('songName'));
let audioElement = new Audio('Audio Files/Aaj Mohabbat.mp3');
let masterPlay = document.getElementById('masterplay')
let gif = document.getElementById('gif')
let myprogressbar = document.getElementById('Myprogressbar')
let Cover = document.getElementById('mastercover')
let masterSongName = document.getElementById('mastersong')

audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].Coverpath;
    element.getElementsByClassName("Name")[0].innerText = songs[i].Songname;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playbutton')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('playbutton')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filepath;
        masterSongName.innerText = songs[songIndex].Songname;
        Cover.src = songs[songIndex].Coverpath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].Songname;
    Cover.src = songs[songIndex].Coverpath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].Songname;
    Cover.src = songs[songIndex].Coverpath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})