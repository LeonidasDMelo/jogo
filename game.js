const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvaswidth = 1024
const canvasheight = 576
canvas.width = canvaswidth
canvas.height = canvasheight 

ctx.fillRect(0,0, canvasheight, canvaswidth)