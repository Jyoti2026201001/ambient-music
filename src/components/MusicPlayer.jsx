import "./MusicPlayer.css";
import {playSong, pauseSong, stopSong} from '../audioManager.js';

const handlePlay = () => {
  playSong(0); // Play the first song in the list
}

const MusicPlayer =()=>
{
    return(<div className="music-player">
      <h3>Now Playing</h3>

      <p>Ambient Music</p>

      <div className="controls">
        <button>⏮</button>
        <button onClick={handlePlay}>▶</button>
        <button>⏭</button>
      </div>
    </div>);
}

export default MusicPlayer;