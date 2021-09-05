import Playlist from "./playlist.js";

const PlayInfo = (() => {
  // state object
  const state = {
    songCount: 0,
    isPlaying: false,
    currentSong: null,
  };
  // caching the dom element

  const playerCountElem = document.querySelector(".player__count");
  const songName = document.querySelector(".song__name");
  const playerTrigger = document.querySelector(".player__trigger");
  const playerPrev = document.querySelector(".fa-step-backward");
  const playerNext = document.querySelector(".fa-step-forward");
  // Initialize function
  const init = () => {
    render();
    togglePlayPause();
  };

  const togglePlayPause = () => {
    playerTrigger.addEventListener("click", () => {
      // 1. change the state

      state.isPlaying = state.isPlaying ? false : true;
      // 2. render the application

      render();
      // 3. play or pause the song from playlist component

      Playlist.flip();
    });
  };
  // change state
  const setState = (obj) => {
    state.songCount = obj.songCount;
    state.isPlaying = obj.isPlaying;
    state.currentSong = obj.currentSong;
    render();
  };
  //render function
  const render = () => {
    playerCountElem.innerHTML = state.songCount;
    songName.innerHTML = `${state.currentSong.title}`;
    playerTrigger.children[0].className = state.isPlaying
      ? "fas fa-pause"
      : "fas fa-play";
  };
  return { init, setState };
})();

export default PlayInfo;
