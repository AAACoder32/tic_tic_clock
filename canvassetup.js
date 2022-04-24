document.body.style.margin = '0px';
document.body.style.padding = '0px';
document.body.style.boxSizing = 'border-box';

const DPI = window.devicePixelRatio;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

function createCanvas(width, height) {
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = Math.floor(width * DPI);
  canvas.height = Math.floor(height * DPI);
  ctx.scale(DPI, DPI);
  document.body.appendChild(canvas);
}

function background(color = 'black') {
  canvas.style.background = color;
}
