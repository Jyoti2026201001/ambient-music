import musicLibrary from 'musicLibrary.js';


const MusicLibrary = () => {
    return(
        <div>
            <h2>Ambient Musics </h2>
            {
                musicLibrary.map((song) => (
                    <div key={song.id}>
                        <h3>{song.title}</h3>
                    </div>))
            }
        </div>
    )
}