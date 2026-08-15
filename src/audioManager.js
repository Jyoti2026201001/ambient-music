import { Howl } from "howler";

let currentSound = null;
let currentIndex = 0;


const songs = [
  "/music/song1.mp3",
  "/music/song2.mp3",
  "/music/song3.mp3",
];

export function playSong(index) {
  if (currentSound) {
    currentSound.stop();
  }

  currentIndex = index;

  currentSound = new Howl({
    src: [songs[index]],
    html5: true,
    onend: () => {
      playNext();
    },
  });

  currentSound.play();

  return true;
}

export function playNextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
}

export function playPreviousSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
}

export function stopSong() {
  if (currentSound) {
    currentSound.stop();
  }
}

export function playRandomSong() {
  let randomIndex = Math.floor(Math.random() * songs.length);

  if (songs.length > 1 && randomIndex === currentIndex) {
    randomIndex = (randomIndex + 1) % songs.length;
  }

  playSong(randomIndex);
}

export function pauseSong() {
  if (currentSound) {
    currentSound.pause();
  }
}

export function resumeSong() {
  if (currentSound) {
    currentSound.play();
  }
}

export function isSongPlaying() {
  return currentSound ? currentSound.playing() : false;
}
export function getCurrentIndex() {
  return currentIndex;
}