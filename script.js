const canvasEl = document.querySelector('canvas'),
  canvasCtx = canvasEl.getContext('2d'),
  gapX = 10

function setup() {
  canvasEl.width = canvasCtx.width = window.innerWidth
  canvasEl.height = canvasCtx.height = window.innerHeight
}

const field = {
  x: 0,
  y: 0,
  w: innerWidth,
  h: innerHeight,
  draw: function () {
    canvasCtx.fillStyle = '#000'
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
  },
}

const line = {
  w: 10,
  h: field.h,
  draw: function () {
    canvasCtx.fillStyle = '#fff'
    canvasCtx.fillRect(field.w / 2 - this.w, 0, this.w, this.h)
  },
}

const score = {
  human: 1,
  computer: 2,
  draw: function () {
    canvasCtx.fillStyle = '#cecece'
    ;(canvasCtx.font = 'bold 72px arial'),
      (canvasCtx.textAlign = 'center'),
      (canvasCtx.textBaseline = 'top'),
      canvasCtx.fillText(this.human, field.w / 4, 50),
      canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50)
  },
}

const ball = {
  x: 500,
  y: 300,
  r: 10,
  draw: function () {
    canvasCtx.beginPath()
    canvasCtx.fillStyle = '#fff'
    canvasCtx.arc(this.x, this.y, this.r, Math.PI * 2, 0, false)
    canvasCtx.fill()
  },
}

const leftPaddle = {
  x: gapX,
  y: 200,
  w: 10,
  h: 150,
  draw: function () {
    canvasCtx.fillStyle = '#fff'
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
  },
}

const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 100,
  w: 10,
  h: 150,
  draw: function () {
    canvasCtx.fillStyle = '#fff'
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
  },
}

function draw() {
  field.draw()
  line.draw()
  score.draw()
  ball.draw()
  leftPaddle.draw()
  rightPaddle.draw()
}

setup()
draw()
