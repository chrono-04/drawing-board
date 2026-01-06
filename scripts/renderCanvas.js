import { draw } from "./draw.js";

function renderCanvas() {
  const canvasContainer = document.querySelector(".canvas-container");

  while (canvasContainer.firstChild) {
    canvasContainer.removeChild(canvasContainer.firstChild);
  }

  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "mainCanvas");
  canvas.setAttribute("width", "1280");
  canvas.setAttribute("height", "720");
  canvasContainer.appendChild(canvas);

  draw(canvas);
}

export { renderCanvas };
