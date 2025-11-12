const playButton = document.getElementById("playButton");
const song = document.getElementById("song");
const message = document.getElementById("message");

playButton.addEventListener("click", () => {
  song.play();
  playButton.style.display = "none";
  message.classList.remove("hidden");
});
