import songsList from "../data/songs.js";

const Playlist = (() => {
  const songs = songsList;
  const currentPlayIndex = 0;
  const currentSong = new Audio(songs[currentPlayIndex].url);

  const init = () => {
    console.log("Hello from playlist");
    console.log(songs);
  };
  return {
    init,
  };
})();

export default Playlist;
