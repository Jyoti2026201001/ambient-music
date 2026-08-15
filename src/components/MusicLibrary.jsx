import {useState} from 'react';

import musicLibrary from '../musicLibrary.js';
import "./MusicLibrary.css";
import {playSong,pauseSong} from '../audioManager.js';


// Some unfinished work is there
const MusicLibrary = () => {

    const [currentIndex, setCurrentIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const handleSongClick = (index) => {
    if (currentIndex === index && isPlaying) {
        pauseSong();
        setIsPlaying(false);
    } else {
        playSong(index);
        setCurrentIndex(index);
        setIsPlaying(true);
    }
};

    return(
        <div className="music-library">
            <h2>Ambient Musics </h2>
            {
                musicLibrary.map((song,index) => (
                    <div key={song.id} className="song">
                        <h3>{song.title}</h3>
                         <button onClick={() => handleSongClick(index)}>
                            {currentIndex === index && isPlaying ? "Pause" : "Play"}
                        </button>
                    </div>))
            }
        </div>
    )
}

export default MusicLibrary;