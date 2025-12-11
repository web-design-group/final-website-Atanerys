document.addEventListener("DOMContentLoaded", () => {
  const setupTicker = (containerId, textId, direction = "left") => {
    const container = document.getElementById(containerId);
    const text = document.getElementById(textId);

   
    const repeatCount = Math.ceil(container.offsetWidth / text.offsetWidth) + 2;
    text.textContent = text.textContent.repeat(repeatCount);

    const fullWidth = text.offsetWidth;

    gsap.fromTo(
      text,
      { x: direction === "left" ? 0 : -fullWidth / 2 },
      { x: direction === "left" ? -fullWidth / 2 : 0,
        duration: 70,
        ease: "linear",
        repeat: -1
      }
    );
  };

  setupTicker("ticker-container1", "ticker-text1", "left");
  setupTicker("ticker-container2", "ticker-text2", "right");
});