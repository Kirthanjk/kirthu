const button = document.getElementById('playButton');
const message = document.getElementById('message');
const song = document.getElementById('song');

button.addEventListener('click', () => {
  song.play();
  button.style.display = 'none';
  setTimeout(() => {
    message.classList.remove('hidden');
  }, 1500); // show text 1.5s after music starts
});