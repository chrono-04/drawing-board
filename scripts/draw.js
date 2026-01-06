import { renderCanvas } from "./renderCanvas.js";

function getCanvasCoordinates(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}

function draw(canvas) {
  const ctx = canvas.getContext("2d");

  let isDrawing = false;

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;

    const coords = getCanvasCoordinates(canvas, e);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(coords.x, coords.y);
    console.log("Started Drawing");
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const coords = getCanvasCoordinates(canvas, e);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  });

  canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;
    console.log("Stopped drawing");
  });
}

export { draw };
