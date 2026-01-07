function setCursor(size) {
  const svg = `<svg width="${size}px" height="${size}px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs><style>.a{fill:none;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class="a" cx="24" cy="24" r="21.5"/></svg>`;

  const encoded = btoa(svg);
  document.body.style.cursor = `url(data:image/svg+xml;base64,${encoded}) ${size / 2} ${size / 2}, auto`;
}

export { setCursor };
