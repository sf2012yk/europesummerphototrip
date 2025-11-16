// music.js
function startMusic() {
  const audio = document.getElementById('emirates');
  audio.volume = 0;
  audio.play();

  let volume = 0;
  const fadeInterval = setInterval(() => {
    if (volume < 1) {
      volume += 0.05;
      audio.volume = Math.min(volume, 1);
    } else {
      clearInterval(fadeInterval);
    }
  }, 200);

  document.removeEventListener('click', startMusic);
  document.removeEventListener('keydown', startMusic);
  document.removeEventListener('scroll', startMusic);
}

document.addEventListener('click', startMusic);
document.addEventListener('keydown', startMusic);
document.addEventListener('scroll', startMusic);