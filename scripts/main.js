import { renderCanvas } from "./renderCanvas.js";

const newCanvas = document.querySelector(".new-canvas-btn");
const brushSizeEl = document.querySelector(".brush-size-el");
const brushSizeInput = document.getElementById("brushSize");

newCanvas.addEventListener("click", renderCanvas);
brushSizeInput.addEventListener("input", () => {
  brushSizeEl.textContent = `Brush Size: ${brushSizeInput.value}`;
});

brushSizeEl.textContent = `Brush Size: ${brushSizeInput.value}`;
renderCanvas();
