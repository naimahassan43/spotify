import songsList from "../data/songs.js";
import PlayInfo from "./playinfo.js";

const Playlist = (() => {
  const songs = songsList;
  let currentPlayIndex = 0;
  let currentSong = new Audio(songs[currentPlayIndex].url);
  let isPlaying = false;

  const playListElem = document.querySelector(".playlist");

  const init = () => {
    render();
    listeners();
  };

  const togglePlayPause = () => {
    return currentSong.paused ? currentSong.play() : currentSong.pause();
  };

  const mainPlay = (index) => {
    if (index === currentPlayIndex) {
      // toggle play and pause
      togglePlayPause();
      isPlaying = currentSong.paused ? false : true;
    } else {
      // change the current play index
      // pause the previous song if it is playing
      // play the new song

      currentPlayIndex = index;
      currentSong.src = songs[currentPlayIndex].url;
      togglePlayPause();
      isPlaying = currentSong.paused ? false : true;
    }
  };

  const flip = () => {
    togglePlayPause();
    render();
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
        mainPlay(clickedIndex);
        render();
        PlayInfo.setState({
          songCount: songs.length,
          isPlaying: isPlaying,
          currentSong: songs[currentPlayIndex],
        });
      }
    });
  };

  PlayInfo.setState({
    songCount: songs.length,
    isPlaying: isPlaying,
    currentSong: songs[currentPlayIndex],
  });
  const render = () => {
    let markup = "";

    const toggleIcon = (index) => {
      if (currentPlayIndex == index) {
        return currentSong.paused ? "fa-play" : "fa-pause";
      } else {
        return "fa-play";
      }
    };

    songs.forEach((song, index) => {
      markup += `
             <li class="playlist__song ${
               index == currentPlayIndex ? "playlist__song--active" : ""
             }">
              <div class="play-pause">
                <i class="fa ${toggleIcon(index)} pp-icon">
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
    flip,
  };
})();

export default Playlist;
