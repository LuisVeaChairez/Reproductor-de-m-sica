const titleSong = document.querySelector('.music-player h1')
const artistName = document.querySelector('.music-player p')

const progress = document.getElementById('progress')
const song = document.getElementById('song')

const iconControl = document.getElementById('icon-control')
const playPause = document.querySelector('.button-play-pause')
const rewind = document.querySelector('.rewind')
const forward = document.querySelector('.next')

const songs = [
  {
    title: 'Dios De Pactos',
    name: 'Marcos Witt',
    url: '../music/dios_de_pactos.mp3'
  },
  {
    title: 'Construiré mi Vida',
    name: 'Evan Craft',
    url: '../music/construire_mi_vida.mp3'
  },
  {
    title: 'Roca firme',
    name: 'Evan Craft',
    url: '../music/roca_firme.mp3'
  }
]

let indexSong = 0

function changeSong (index) {
  titleSong.textContent = songs[index].title
  artistName.textContent = songs[index].name
  song.src = songs[index].url
  song.addEventListener('loadeddata', function () {})
  playSong()
  iconControl.classList.replace('bi-pause-fill', 'bi-play-fill')
}

function playSong () {
  song.play()
}

function pauseSong () {
  song.pause()
}

song.addEventListener('timeupdate', function () {
  if (!song.paused) {
    progress.value = song.currentTime
  }
})

progress.addEventListener('input', function () {
  song.currentTime = progress.value
})

playPause.addEventListener('click', () => {
  if (song.paused) {
    playSong()
    iconControl.classList.replace('bi-play-fill', 'bi-pause-fill')
  } else {
    pauseSong()
    iconControl.classList.replace('bi-pause-fill', 'bi-play-fill')
  }
})

forward.addEventListener('click', () => {
  if (indexSong < songs.length - 1) {
    indexSong++
    changeSong(indexSong)
  } else {
    changeSong(0)
  }
})

rewind.addEventListener('click', () => {
  if (progress.value > 5) {
    progress.value = 0
    song.currentTime = progress.value
  } else {
    if (indexSong > 0) {
      indexSong--
      changeSong(indexSong)
    } else {
      indexSong = songs.length - 1
      changeSong(indexSong)
    }
  }
})

changeSong(indexSong)
