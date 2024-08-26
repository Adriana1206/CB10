import { useState } from 'react';
import styles from './App.module.css';
import Layout from './components/Layout/Layout';

function App() {
  const [songName, setSongName] = useState('');
  const [bandName, setBandName] = useState('');
  const [genre, setGenre] = useState('Rock');
  const [songs, setSongs] = useState([]);
  const [filterGenre, setFilterGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSong = { songName, bandName, genre };
    setSongs([...songs, newSong]);
    setSongName('');
    setBandName('');
    setGenre('Rock');
  };

  const handleDelete = (index) => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  const filteredSongs = filterGenre
    ? songs.filter((song) => song.genre === filterGenre)
    : songs;

  return (
    <Layout>
      <div className={styles.appContainer}>
        <div className={styles.formContainer}>
          <h1>Add a Song</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="song">Song Name</label>
              <input
                type="text"
                id="song"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="band">Band Name</label>
              <input
                type="text"
                id="band"
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="genre">Genre</label>
              <select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Hip-hop">Hip-hop</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
              </select>
            </div>
            <button type="submit">Add Song</button>
          </form>
          <div className={styles.buttonContainer}>
            <label htmlFor="filter">Filter by Genre:</label>
            <select
              id="filter"
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
            >
              <option value="">All</option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Hip-hop">Hip-hop</option>
              <option value="Jazz">Jazz</option>
              <option value="Classical">Classical</option>
            </select>
          </div>
        </div>
        <div className={styles.catalogContainer}>
          <div className={styles.songsList}>
            <h2>Added Songs</h2>
            {filteredSongs.map((song, index) => (
              <div key={index} className={styles.songItem}>
                <div>
                  <p><strong>Song:</strong> {song.songName}</p>
                  <p><strong>Band:</strong> {song.bandName}</p>
                  <p><strong>Genre:</strong> {song.genre}</p>
                </div>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
