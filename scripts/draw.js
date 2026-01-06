function getCanvasCoordinates(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}

function draw(canvas) {
  const ctx = canvas.getContext("2d");

  let isDrawing = false;
  let lastX, lastY;

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;

    const coords = getCanvasCoordinates(canvas, e);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.imageSmoothingEnabled = true;
    ctx.moveTo(coords.x, coords.y);
    lastX = coords.x;
    lastY = coords.y;
    console.log("Started Drawing");
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const coords = getCanvasCoordinates(canvas, e);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    lastX = coords.x;
    lastY = coords.y;
  });

  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    console.log("Stopped drawing");
  });

  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
    console.log("Stopped drawing");
  });
}

export { draw };
