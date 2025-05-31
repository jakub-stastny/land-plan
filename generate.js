function drawLand(svg) {
  showGrid(svg, 40, 40)

  drawRect(svg, {cx: 5, cy: 5, width: 4, height: 3, strokeWidth: 0.50, stroke: "#888"})
  drawRect(svg, {cx: 20, cy: 5, width: 8, height: 6, strokeWidth: 0.50, stroke: "#888"})

  drawEllipse(svg, {cx: 20, cy: 19, width: 20, ratio: 4/5, stroke: 'black', strokeWidth: 0.1})
  drawEllipse(svg, {cx: 20, cy: 20, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.1})
  drawEllipse(svg, {cx: 20, cy: 20, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})
  drawStaircase(svg, {cx: 20, cy: 16})
  drawRect(svg, {cx: 16.7, cy: 16, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: 25})
  drawRect(svg, {cx: 23.3, cy: 16, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: -25})
  drawBananaPlant(svg, {cx: 14, cy: 15})
  drawBananaPlant(svg, {cx: 13, cy: 16.5})
  drawBananaPlant(svg, {cx: 12, cy: 18})
}

function drawPond(svg, {centreX, centreY}) {
  showGrid(svg, 11, 7)

  drawEllipse(svg, {cx: centreX, cy: centreY - 2.3, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.1})
  drawEllipse(svg, {cx: centreX, cy: centreY - 2.3, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})
}

function drawGround(svg, {centreX, centreY}) {
  showGrid(svg, 11, 7)

  drawEllipse(svg, {cx: centreX, cy: centreY, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.3})
  drawEllipse(svg, {cx: centreX, cy: centreY, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})

  drawBananaPlant(svg, {cx: centreX - 3, cy: centreY})
  drawBananaPlant(svg, {cx: centreX + 3, cy: centreY})

  drawBananaPlant(svg, {cx: centreX - 2.3, cy: centreY - 1.4})
  drawBananaPlant(svg, {cx: centreX + 2.3, cy: centreY + 1.4})

  drawBananaPlant(svg, {cx: centreX - 2.3, cy: centreY + 1.4})
  drawBananaPlant(svg, {cx: centreX + 2.3, cy: centreY - 1.4})

  drawBananaPlant(svg, {cx: centreX - 0.8, cy: centreY - 2})
  drawBananaPlant(svg, {cx: centreX + 0.8, cy: centreY + 2})

  drawBananaPlant(svg, {cx: centreX - 0.8, cy: centreY + 2})
  drawBananaPlant(svg, {cx: centreX + 0.8, cy: centreY - 2})

  drawStaircase(svg, {cx: centreX, cy: 1.7})
  drawRect(svg, {cx: 8.7, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: 25})
  drawRect(svg, {cx: 2.2, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: -25})
}

function drawUpper(svg, {centreX, centreY}) {
  showGrid(svg, 11, 7)

  drawEllipse(svg, {cx: centreX, cy: centreY, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.1})
  drawEllipse(svg, {cx: centreX, cy: centreY, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})

  drawBananaPlant(svg, {cx: centreX - 3, cy: centreY})
  drawBananaPlant(svg, {cx: centreX + 3, cy: centreY})

  drawBananaPlant(svg, {cx: centreX - 2.3, cy: centreY - 1.4})
  drawBananaPlant(svg, {cx: centreX + 2.3, cy: centreY + 1.4})

  drawBananaPlant(svg, {cx: centreX - 2.3, cy: centreY + 1.4})
  drawBananaPlant(svg, {cx: centreX + 2.3, cy: centreY - 1.4})

  drawBananaPlant(svg, {cx: centreX - 0.8, cy: centreY - 2})
  drawBananaPlant(svg, {cx: centreX + 0.8, cy: centreY + 2})

  drawBananaPlant(svg, {cx: centreX - 0.8, cy: centreY + 2})
  drawBananaPlant(svg, {cx: centreX + 0.8, cy: centreY - 2})

  drawStaircase(svg, {cx: centreX, cy: 1.7})
  drawRect(svg, {cx: 8.7, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: 25})
  drawRect(svg, {cx: 2.2, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: -25})
}

document.addEventListener('DOMContentLoaded', () => {
  drawLand(document.getElementById('canvas-land'))

  const opts = {centreX: 5.5, centreY: 5.8}
  drawPond(document.getElementById('canvas-pond'), opts)
  drawGround(document.getElementById('canvas-ground'), opts)
  drawUpper(document.getElementById('canvas-upper'), opts)
})
