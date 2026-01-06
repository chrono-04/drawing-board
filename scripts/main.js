import { renderCanvas } from "./renderCanvas.js";

const newCanvas = document.querySelector(".new-canvas-btn");

newCanvas.addEventListener("click", renderCanvas);

renderCanvas();
