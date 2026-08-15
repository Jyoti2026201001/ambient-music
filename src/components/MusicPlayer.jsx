import "./MusicPlayer.css";
import {playSong, pauseSong, playPreviousSong,playNextSong,stopSong} from '../audioManager.js';

const handlePlay = () => {
  playSong(0); // Play the first song in the list
}

const MusicPlayer =()=>
{
    return(<div className="music-player">
      <h3>Now Playing</h3>

      <p>Ambient Music</p>

      <div className="controls">
        <button onClick={playPreviousSong}>⏮</button>
        <button onClick={handlePlay}>▶</button>
        <button onClick={playNextSong}>⏭</button>
      </div>
    </div>);
}

export default MusicPlayer;