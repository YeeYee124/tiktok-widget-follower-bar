const GOAL = 10000;
const countEl = document.getElementById('count');
const progEl = document.getElementById('progress');
const imgEl = document.getElementById('celebrate-img');
const sndEl = document.getElementById('celebrate-sound');

let current = 0;
let goalReached = false;

// Simple simulation — replace this with your real API fetch logic
function simulateFollowerUpdate() {
  const next = Math.min(GOAL, current + Math.floor(Math.random() * 200));
  updateCount(next);
  if (next < GOAL && !goalReached) {
    setTimeout(simulateFollowerUpdate, 2000);
  }
}
setTimeout(simulateFollowerUpdate, 1000);

function updateCount(newCount) {
  current = newCount;
  const pct = (current / GOAL) * 100;
  countEl.textContent = `${current.toLocaleString()} / ${GOAL.toLocaleString()}`;
  progEl.style.width = `${pct}%`;

  if (current >= GOAL && !goalReached) {
    goalReached = true;
    triggerCelebration();
  }
}

function triggerCelebration() {
  imgEl.style.display = 'block';
  sndEl.play();
  imgEl.animate([
    { transform: 'translate(-50%,0) scale(0)' },
    { transform: 'translate(-50%,50px) scale(1)' }
  ], {
    duration: 800,
    easing: 'ease-out',
    fill: 'forwards'
  });
  setTimeout(() => {
    imgEl.style.display = 'none';
  }, 5000);
}
