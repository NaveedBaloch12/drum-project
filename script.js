function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('play');
  }
  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);
  
    if (!audio) return;
    key.classList.add('play');
    audio.currentTime = 0;
    audio.play();
  }
  
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener("transitionend", removeClass));
  window.addEventListener("keydown", playSound);
  