const btn = document.getElementById('buyButton');


const idleFrames = [
  "Image/still1.png", "Image/still2.png", "Image/still3.png",
  "Image/still4.png", "Image/still5.png", "Image/still6.png",
  "Image/still7.png", "Image/still8.png"
];

const hoverFrames = [
  "Image/Hover1.png", "Image/Hover2.png", "Image/Hover3.png"
];

const pressedFrames = [
  "Image/pres1.png", "Image/pres2.png"
];

let frameIndex = 0;
let interval = null;
let isPressed = false;


function startAnimation(frames, delay = 150) {
  clearInterval(interval);
  frameIndex = 0;

  interval = setInterval(() => {
    btn.src = frames[frameIndex];
    frameIndex = (frameIndex + 1) % frames.length;
  }, delay);
}

function playOnceHoldLast(frames, delay = 50, onEnd = null) {
  clearInterval(interval);
  frameIndex = 0;

  interval = setInterval(() => {
    btn.src = frames[frameIndex];
    frameIndex++;

    if (frameIndex >= frames.length) {
      clearInterval(interval);

     
      btn.src = frames[frames.length - 1];

      if (onEnd) onEnd();
    }
  }, delay);
}


startAnimation(idleFrames);


btn.addEventListener('mouseenter', () => {
  if (!isPressed) startAnimation(hoverFrames, 80);
});


btn.addEventListener('mouseleave', () => {
  if (!isPressed) startAnimation(idleFrames, 150);
});


btn.addEventListener('mousedown', () => {
  isPressed = true;

  playOnceHoldLast(pressedFrames, 100, () => {

    window.location.href = "afisha.html";
  });
});


btn.addEventListener('mouseup', () => {
  isPressed = false;
  const isHover = btn.matches(':hover');
  startAnimation(isHover ? hoverFrames : idleFrames);
});