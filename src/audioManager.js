import { Howl } from "howler";

let currentSound = null;

export function playSong(file) {
  if (currentSound) {
    currentSound.stop();
  }

  currentSound = new Howl({
    src: [file],
    html5: true,
  });

  currentSound.play();
}