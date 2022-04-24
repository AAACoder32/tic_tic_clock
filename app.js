createCanvas(360, 360);
background('#080910');

function needle(length, angle, color = 'white', lineWidth = 6) {

  angle -= Math.PI / 2;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineJoin = 'round';
  ctx.translate(180, 180);
  ctx.beginPath();
  ctx.moveTo(0, 0)
  let x = length * Math.cos(angle);
  let y = length * Math.sin(angle);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function timeStamp(radii, color = 'white') {

  let angle = 0;
  ctx.fillStyle = color;

  ctx.save();
  ctx.translate(180, 180);
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    let x = radii * Math.cos(angle);
    let y = radii * Math.sin(angle);
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    angle += Math.PI / 6;
  }

  ctx.restore();
}

function main() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours() % 12;

  let secondsAngle = map(seconds, 0, 60, 0, 2 * Math.PI);
  let minutesAngle = map(minutes, 0, 60, 0, 2 * Math.PI);
  let hoursAngle = map(hours, 0, 12, 0, 2 * Math.PI);


  needle(40, hoursAngle, '#EC3030');
  needle(70, minutesAngle, '#5DE841');
  needle(100, secondsAngle, '#E939D4');
  timeStamp(120);

  requestAnimationFrame(main);
}

requestAnimationFrame(main);