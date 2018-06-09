const fs = require('fs')
const blessed = require('blessed')

// Create a screen object.
const screen = blessed.screen({
  smartCSR: true,
})

screen.title = 'ploi'

// Create a box perfectly centered horizontally and vertically.
const boxLeft = blessed.list({
  width: '50%',
  height: '100%',
  items: [],
  grabKeys: true,
  vi: true,
  style: { selected: { bg: '#000', fg: 'red' } },
  tags: true,
  border: {
    type: 'line',
  },
})
const boxRight = blessed.box({
  left: '50%',
  width: '50%',
  height: '100%',
  content: 'Right',
  tags: true,
  border: {
    type: 'line',
  },
})


// Append our box to the screen.
screen.append(boxLeft)
screen.append(boxRight)

// If box is focused, handle `enter`/`return` and give us some more content.
boxRight.key('enter', function(ch, key) {
  boRightx.setContent('{right}Even different {blue-fg}content{/blue-fg}.{/right}\n')
  boxRight.setLine(1, 'bar')
  boxRight.insertLine(1, 'foo')
  screen.render()
  boxRight.focus()
})

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0)
})

// Focus our element.
boxLeft.focus()

// Render the screen.
screen.render()

fs.readFile('test.json', { encoding: 'utf-8' }, (err, data) => {
  data = JSON.parse(data)
  for (dep in data.dependencies) {
    boxLeft.addItem(dep)
  }
  screen.render()
})

packageInfo = (name) => {

}
