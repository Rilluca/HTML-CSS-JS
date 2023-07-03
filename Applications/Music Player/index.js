const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/A Lone Prayer.mp3',
        displayName: 'A Lone Prayer',
        cover: 'assets/A Lone Prayer.jpg',
        artist: 'Yumi Kawamura',
    },

    {
        path: 'assets/Bad Apple!!.mp3',
        displayName: 'Bad Apple!!',
        cover: 'assets/Bad Apple!!.jpg',
        artist: 'Roselia',
    },

    {
        path: 'assets/Dream of Butterfly.mp3',
        displayName: 'Dream of Butterfly',
        cover: 'assets/A Lone Prayer.jpg',
        artist: 'Yumi Kawamura',
    },

    {
        path: 'assets/Emotional Days.mp3',
        displayName: 'Emotional Days',
        cover: 'assets/Fallin Light.jpg',
        artist: 'GFRIEND',
    },

    {
        path: 'assets/Fallin Light.mp3',
        displayName: 'Fallin Light',
        cover: 'assets/Fallin Light.jpg',
        artist: 'GFRIEND',
    },

    {
        path: 'assets/Flower.mp3',
        displayName: 'Flower',
        cover: 'assets/Flower.jpg',
        artist: 'GFRIEND',
    },

    {
        path: 'assets/Harehare Ya.mp3',
        displayName: 'Harehare Ya',
        cover: 'assets/Harehare Ya.jpg',
        artist: 'Sou',
    },

    {
        path: 'assets/I Wont Stop.mp3',
        displayName: 'I Wont Stop',
        cover: 'assets/I Wont Stop.jpg',
        artist: '王者无限团',
    },

    {
        path: 'assets/Identity.mp3',
        displayName: 'Identity',
        cover: 'assets/Identity.jpg',
        artist: '25-ji, Nightcord de.',
    },

    {
        path: 'assets/KiLLER LADY.mp3',
        displayName: 'KiLLER LADY',
        cover: 'assets/KiLLER LADY.jpg',
        artist: 'Shoose',
    },

    {
        path: 'assets/KiLLiNG ME.mp3',
        displayName: 'KiLLiNG ME',
        cover: 'assets/KiLLiNG ME.jpg',
        artist: 'Rondo',
    },

    {
        path: 'assets/La Pam Pam.mp3',
        displayName: 'La Pam Pam',
        cover: 'assets/La Pam Pam.jpg',
        artist: 'GFRIEND',
    },

    {
        path: 'assets/Masked bitcH.mp3',
        displayName: 'Masked bitcH',
        cover: 'assets/Masked bitcH.jpg',
        artist: 'Shoose',
    },

    {
        path: 'assets/My My My!.mp3',
        displayName: 'My My My!',
        cover: 'assets/Fallin Light.jpg',
        artist: 'GFRIEND',
    },

    {
        path: 'assets/Poker Face.mp3',
        displayName: 'Poker Face',
        cover: 'assets/Poker Face.jpg',
        artist: 'Kagamine Rin & Len',
    },

    {
        path: 'assets/School Days.mp3',
        displayName: 'School Days',
        cover: 'assets/A Lone Prayer.jpg',
        artist: 'Yumi Kawamura',
    },

    {
        path: 'assets/Strobe Last.mp3',
        displayName: 'Strobe Last',
        cover: 'assets/Strobe Last.jpg',
        artist: 'Mimori Suzuko',
    },

    {
        path: 'assets/Take Your Way.mp3',
        displayName: 'Take Your Way',
        cover: 'assets/Take Your Way.jpg',
        artist: 'livetune adding Fukase',
    },

    {
        path: 'assets/The Beginning of Love.mp3',
        displayName: 'The Beginning of Love',
        cover: 'assets/Fallin Light.jpg',
        artist: 'GFRIEND',
    },

    {
        path: 'assets/WAVE.mp3',
        displayName: 'WAVE',
        cover: 'assets/WAVE.jpg',
        artist: 'Giga-P',
    },

    {
        path: 'assets/不惧浪.mp3',
        displayName: '不惧浪',
        cover: 'assets/不惧浪.jpg',
        artist: '王者无限团',
    },

    {
        path: 'assets/红叶寺.mp3',
        displayName: '红叶寺',
        cover: 'assets/红叶寺.jpg',
        artist: '小残',
    },

    {
        path: 'assets/葬仙.mp3',
        displayName: '葬仙',
        cover: 'assets/葬仙.jpg',
        artist: '叶里 & 苑舍',
    },

    {
        path: 'assets/鱼.mp3',
        displayName: '鱼',
        cover: 'assets/鱼.jpg',
        artist: '西瓜JUN',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if(isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const {duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);