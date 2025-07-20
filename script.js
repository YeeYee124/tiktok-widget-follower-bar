co@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');

body {
  margin: 0;
  background: transparent;
  font-family: 'Bubblegum Sans', cursive;
  color: #39ff14;
  text-shadow: 0 0 6px #39ff14;
  text-align: center;
}

#widget {
  width: 500px;
  margin: auto;
  padding: 20px;
}

#header {
  font-size: 24px;
  margin-bottom: 10px;
}

#count-label {
  font-size: 32px;
  margin-bottom: 20px;
}

#bar-container {
  position: relative;
  height: 20px;
  background: #222;
  border-radius: 10px;
  box-shadow: 0 0 10px #39ff14;
  overflow: hidden;
}

#bar {
  width: 100%;
  height: 100%;
  position: relative;
}

#progress {
  position: absolute;
  height: 100%;
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  transition: width 1s ease-in-out;
}

#dot {
  position: absolute;
  top: -6px;
  width: 12px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px #fff, 0 0 20px #ff00ff;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 0 10px #fff; }
  50% { transform: scale(1.3); box-shadow: 0 0 20px #ff00ff; }
  100% { transform: scale(1); box-shadow: 0 0 10px #fff; }
}

#celebrate-img {
  margin-top: 20px;
  width: 200px;
  display: none;
}
