const GOAL = 10000;
let current = 0;
let goalReached = false;

const countEl = document.getElementById("count");
const progressEl = document.getElementById("progress");
const dotEl = document.getElementById("dot");
const imgEl = document.getElementById("celebrate-img");
const sndEl = document.getElementById("celebrate-sound");

// Simulated update — replace with real data from your API if needed
function simulateUpdate() {
  const next = Math.min(GOAL, current + Math.floor(Math.random() * 300));
  updateCount(next);
  if (next < GOAL && !goalReached) {
    setTimeout(simulateUpdate, 2000);
  }
}
setTimeout(simulateUpdate, 1000);

function updateCount(newVal) {
  current = newVal;
  const pct = Math.min(100, (current / GOAL) * 100);
  countEl.textContent = `${current.toLocaleString()} / ${GOAL.toLocaleString()} Followers`;
  progressEl.style.width = `${pct}%`;
  dotEl.style.left = `calc(${pct}% - 6px)`;

  if (current >= GOAL && !goalReached) {
    goalReached = true;
    triggerCelebration();
  }
}

function triggerCelebration() {
  imgEl.style.display = "block";
  sndEl.play();
}
