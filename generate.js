document.addEventListener('DOMContentLoaded', () => {
  /* Set up canvases */
  const land = document.getElementById('canvas-land')
  const pond = document.getElementById('canvas-pond')
  const ground = document.getElementById('canvas-ground')
  const upper = document.getElementById('canvas-upper')

  showGrid(land, 40, 40)
  showGrid(pond, 11, 7)
  showGrid(ground, 11, 9)
  showGrid(upper, 11, 9)

  const centreX = 5.5 // doesn't change
  const centreY = 5.8

  /* Land */
  drawRect(land, {cx: 5, cy: 5, width: 4, height: 3, strokeWidth: 0.50, stroke: "#888"})
  drawRect(land, {cx: 20, cy: 5, width: 8, height: 6, strokeWidth: 0.50, stroke: "#888"})

  drawEllipse(land, {cx: 20, cy: 19, width: 20, ratio: 4/5, stroke: 'black', strokeWidth: 0.1})
  drawEllipse(land, {cx: 20, cy: 20, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.1})
  drawEllipse(land, {cx: 20, cy: 20, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})
  drawStaircase(land, {cx: 20, cy: 16})
  drawRect(land, {cx: 16.7, cy: 16, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: 25})
  drawRect(land, {cx: 23.3, cy: 16, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: -25})
  drawBananaPlant(land, {cx: 14, cy: 15})
  drawBananaPlant(land, {cx: 13, cy: 16.5})
  drawBananaPlant(land, {cx: 12, cy: 18})

  /* Pond */
  drawEllipse(pond, {cx: centreX, cy: centreY - 2.3, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.1})
  drawEllipse(pond, {cx: centreX, cy: centreY - 2.3, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})

  /* Ground floor */
  drawEllipse(ground, {cx: centreX, cy: centreY, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.3})
  drawEllipse(ground, {cx: centreX, cy: centreY, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})

  drawBananaPlant(ground, {cx: centreX - 3, cy: centreY})
  drawBananaPlant(ground, {cx: centreX + 3, cy: centreY})

  drawBananaPlant(ground, {cx: centreX - 2.3, cy: centreY - 1.4})
  drawBananaPlant(ground, {cx: centreX + 2.3, cy: centreY + 1.4})

  drawBananaPlant(ground, {cx: centreX - 2.3, cy: centreY + 1.4})
  drawBananaPlant(ground, {cx: centreX + 2.3, cy: centreY - 1.4})

  drawBananaPlant(ground, {cx: centreX - 0.8, cy: centreY - 2})
  drawBananaPlant(ground, {cx: centreX + 0.8, cy: centreY + 2})

  drawBananaPlant(ground, {cx: centreX - 0.8, cy: centreY + 2})
  drawBananaPlant(ground, {cx: centreX + 0.8, cy: centreY - 2})

  drawStaircase(ground, {cx: centreX, cy: 1.7})
  drawRect(ground, {cx: 8.7, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: 25})
  drawRect(ground, {cx: 2.2, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: -25})

  /* Upper floor */
  drawEllipse(upper, {cx: centreX, cy: centreY, width: 5, ratio: 3/5, stroke: '#e63946', strokeWidth: 0.1})
  drawEllipse(upper, {cx: centreX, cy: centreY, width: 8.2, ratio: 3.5/5, stroke: '#888', strokeWidth: 0.50})

  drawBananaPlant(upper, {cx: centreX - 3, cy: centreY})
  drawBananaPlant(upper, {cx: centreX + 3, cy: centreY})

  drawBananaPlant(upper, {cx: centreX - 2.3, cy: centreY - 1.4})
  drawBananaPlant(upper, {cx: centreX + 2.3, cy: centreY + 1.4})

  drawBananaPlant(upper, {cx: centreX - 2.3, cy: centreY + 1.4})
  drawBananaPlant(upper, {cx: centreX + 2.3, cy: centreY - 1.4})

  drawBananaPlant(upper, {cx: centreX - 0.8, cy: centreY - 2})
  drawBananaPlant(upper, {cx: centreX + 0.8, cy: centreY + 2})

  drawBananaPlant(upper, {cx: centreX - 0.8, cy: centreY + 2})
  drawBananaPlant(upper, {cx: centreX + 0.8, cy: centreY - 2})

  drawStaircase(upper, {cx: centreX, cy: 1.7})
  drawRect(upper, {cx: 8.7, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: 25})
  drawRect(upper, {cx: 2.2, cy: 2.5, width: 3, height: 2, strokeWidth: 0.50, stroke: "#888", rotation: -25})
});
