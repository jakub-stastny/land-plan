const gridSpacing = 0.25

function showGrid(svg, maxX, maxY) {
  const svgNS = svg.namespaceURI
  for (let x = 0; x <= maxX + 0.0001; x += gridSpacing ) {
    const line = document.createElementNS(svgNS, 'line')
    line.setAttribute('x1', x)
    line.setAttribute('y1', 0)
    line.setAttribute('x2', x)
    line.setAttribute('y2', maxY)
    line.setAttribute('class', (Math.abs(x % 1) < 1e-6) ? 'grid100' : 'grid25')
    svg.appendChild(line)
  }

  for (let y = 0; y <= maxY + 0.0001; y += gridSpacing) {
    const line = document.createElementNS(svgNS, 'line')
    line.setAttribute('x1', 0)
    line.setAttribute('y1', y)
    line.setAttribute('x2', maxX)
    line.setAttribute('y2', y)
    line.setAttribute('class', (Math.abs(y % 1) < 1e-6) ? 'grid100' : 'grid25')
    svg.appendChild(line)
  }
}

function drawEllipse(svg, { cx, cy, width, ratio, stroke, strokeWidth, opacity = 0.8 }) {
  const ellipse = document.createElementNS(svg.namespaceURI, 'ellipse')
  ellipse.setAttribute('cx', cx)
  ellipse.setAttribute('cy', cy)
  ellipse.setAttribute('rx', width / 2)
  ellipse.setAttribute('ry', (width * ratio) / 2)
  ellipse.setAttribute('fill', 'none')
  ellipse.setAttribute('stroke', stroke)
  ellipse.setAttribute('stroke-width', strokeWidth)
  ellipse.setAttribute('stroke-opacity', opacity)
  svg.appendChild(ellipse)
}

function drawEllipticalRacks(svg, {
  cx, cy,
  width,            // major axis length
  ratio,            // b / a (minor / major)
  offset = 0.1,     // how far from ellipse edge outward
  count = 16,
  length = 1.2,
  widthRack = 0.4,
  color = 'saddlebrown',
  opacity = 0.8,
  startAngle = 0
}) {
  const a = width / 2
  const b = (width * ratio) / 2

  const deg2rad = angle => angle * Math.PI / 180
  const stepAngle = 360 / count

  const svgNS = svg.namespaceURI

  for (let i = 0; i < count; i++) {
    const angleDeg = startAngle + i * stepAngle
    const angleRad = deg2rad(angleDeg)

    const ux = Math.cos(angleRad)
    const uy = Math.sin(angleRad)

    const ex = a * ux
    const ey = b * uy

    const px = cx + ex + ux * offset
    const py = cy + ey + uy * offset

    const rect = document.createElementNS(svgNS, 'rect')
    rect.setAttribute('x', (-length / 2).toString())
    rect.setAttribute('y', (-widthRack / 2).toString())
    rect.setAttribute('width', length.toString())
    rect.setAttribute('height', widthRack.toString())
    rect.setAttribute('fill', color)
    rect.setAttribute('fill-opacity', opacity)
    rect.setAttribute('transform', `translate(${px}, ${py}) rotate(${angleDeg})`)
    svg.appendChild(rect)
  }
}

function drawRect(svg, {
  cx, cy,
  width, height,
  rotation = 0,
  stroke = 'black',
  strokeWidth = 0.03,
  opacity = 0.8,
  rx = 0.3,            // horizontal corner radius
  ry = 0.3             // vertical corner radius
}) {
  const rect = document.createElementNS(svg.namespaceURI, 'rect')
  rect.setAttribute('x', (-width / 2).toString())
  rect.setAttribute('y', (-height / 2).toString())
  rect.setAttribute('width', width.toString())
  rect.setAttribute('height', height.toString())
  rect.setAttribute('fill', 'none')
  rect.setAttribute('stroke', stroke)
  rect.setAttribute('stroke-width', strokeWidth.toString())
  rect.setAttribute('stroke-opacity', opacity.toString())
  rect.setAttribute('transform', `translate(${cx}, ${cy}) rotate(${rotation})`)
  if (rx > 0) rect.setAttribute('rx', rx.toString())
  if (ry > 0) rect.setAttribute('ry', ry.toString())
  svg.appendChild(rect)
}

function drawStaircase(svg, { cx, cy, stairTowerRatio = 3.5 / 5 }) {
  drawEllipse(svg, {cx, cy, width: 3.7, ratio: stairTowerRatio, stroke: '#888', strokeWidth: 0.50})
  drawEllipse(svg, {cx, cy, width: 1, ratio: stairTowerRatio, stroke: 'dodgerblue', strokeWidth: 0.50})
  drawEllipticalRacks(svg, {cx, cy, width: 2.3, ratio: stairTowerRatio, offset: 0.1, count: 16, length: 0.80, widthRack: 0.3})
}

function drawBananaPlant(svg, {cx, cy}) {
  drawEllipticalRacks(svg, {cx, cy, width: 0.1, ratio: 1, color: 'green', count: 7})
}
