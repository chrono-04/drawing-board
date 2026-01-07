import { draw } from "./draw.js";

const saveCanvasBtn = document.querySelector(".save-canvas-size-btn");

function renderCanvas() {
  const canvasContainer = document.querySelector(".canvas-container");

  while (canvasContainer.firstChild) {
    canvasContainer.removeChild(canvasContainer.firstChild);
  }

  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "mainCanvas");
  canvas.width = 1280;
  canvas.height = 720;
  canvasContainer.appendChild(canvas);

  console.log(canvas.width, canvas.height);

  draw(canvas);
  canvasWidth.value = "";
  canvasHeight.value = "";
}

export { renderCanvas };
