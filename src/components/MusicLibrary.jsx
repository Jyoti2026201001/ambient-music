import musicLibrary from '../musicLibrary.js';
import "./MusicLibrary.css";

const MusicLibrary = () => {
    return(
        <div className="music-library">
            <h2>Ambient Musics </h2>
            {
                musicLibrary.map((song) => (
                    <div key={song.id} className="song">
                        <h3>{song.title}</h3>
                    </div>))
            }
        </div>
    )
}

export default MusicLibrary;