import songsList from "../data/songs.js";

const Playlist = (() => {
  const songs = songsList;
  const currentPlayIndex = 0;
  const currentSong = new Audio(songs[currentPlayIndex].url);
  const isPlaying = false;

  const playListElem = document.querySelector(".playlist");

  const init = () => {
    render();
    listeners();
  };

  const listeners = () => {
    // 1. get the index of the li tag
    // 2. change the currentPlayIndex to the index of the li tag
    // 3. change the icon of play and pause
    // 4. play or pause the song
    // 5. if it's not the same song then change the song url to the currently playing song
    // 6. pause the currently playing song and play the currently selected song

    playListElem.addEventListener("click", (e) => {
      if (e.target.matches(".fa")) {
        const listEl = e.target.parentNode.parentNode;
        const clickedIndex = [...listEl.parentNode.children].indexOf(listEl);
        console.log(clickedIndex);
      }
    });
  };

  const render = () => {
    let markup = "";

    songs.forEach((song, index) => {
      markup += `
             <li class="playlist__song ${
               index == currentPlayIndex ? "playlist__song--active" : ""
             }">
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
