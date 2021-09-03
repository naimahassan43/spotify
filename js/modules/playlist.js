import songsList from "../data/songs.js";

const Playlist = (() => {
  const songs = songsList;
  const currentPlayIndex = 0;
  const currentSong = new Audio(songs[currentPlayIndex].url);
  const isPlaying = false;

  const playListElem = document.querySelector(".playlist");

  const init = () => {
    render();
  };

  const render = () => {
    let markup = "";

    songs.forEach((song) => {
      markup += `
             <li class="playlist__song">
              <div class="play-pause">
                <i class="fa fa-play pp-icon">
              </i>
              
              </div>
              <div class="playlist__song-details">
                <span class="playlist__song-name">${song.title}</span>
                <span class="playlist__song-artist">${song.artist}</span>
              </div>
              <div class="playlist__song-duration">${song.time}</div>
            </li>

     `;
    });

    playListElem.innerHTML = markup;
  };
  return {
    init,
  };
})();

export default Playlist;
