import "./MusicPlayer.css";
import {playSong, pauseSong, resumeSong, playPreviousSong,playNextSong,stopSong, isSongPlaying} from '../audioManager.js';
import { useState ,useEffect} from 'react';


const MusicPlayer =()=>
{
    const [isPlaying, setIsPlaying] = useState(isSongPlaying());

    useEffect(() => {
        playSong(0);
        setIsPlaying(true);
         // Start playing the first song when the component mounts
    }, []);

    const handlePlayPause = () => {
        if (isPlaying) {
            pauseSong();
            setIsPlaying(false);
        }
        else
        {
            resumeSong();
            setIsPlaying(true);
        }
    }

    return(<div className="music-player">
      <h3>Now Playing</h3>

      <p>Ambient Music</p>

      <div className="controls">
        <button onClick={playPreviousSong}>⏮</button>
        <button onClick={handlePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={playNextSong}>⏭</button>
      </div>
    </div>);
}

export default MusicPlayer;