// Define the grid area

const gridArea = document.querySelector('#gridArea')

// Default grid size

let squaresPerSide = 16

// Constants - 960x960px grid

const width = 960
const height = 960

gridArea.style.display = 'flex'
gridArea.style.outline = '1px solid black'
gridArea.style.flexWrap = 'wrap'
gridArea.style.width = `${width}px`
gridArea.style.height = `${height}px`

// Functions

/**
 * @description -  Draw a grid of squaresPerSide x squaresPerSide
 * @param {*} squaresPerSide - Number of squares per side
 */
function drawGrid(squaresPerSide) {
	for (let i = 0; i < squaresPerSide ** 2; i++) {
		const gridItem = document.createElement('div')
		gridItem.style.flex = `1 0 ${width / squaresPerSide}px`
		gridItem.style.outline = '1px solid black'

		// Add event listener to change color on hover
		gridItem.addEventListener('mouseover', () => {
            if (!gridItem.style.backgroundColor) {
			gridItem.style.backgroundColor = getRandomColor()
            gridItem.style.opacity = 0.1
            } else {
                let currentOpacity = parseFloat(gridItem.style.opacity)
                gridItem.style.opacity = currentOpacity + 0.1
            }
		})

		gridArea.appendChild(gridItem)
	}
}

/**
 * @description - Remove all grid items
 */
function removeGrid() {
	while (gridArea.firstChild) {
		gridArea.removeChild(gridArea.firstChild)
	}
}

/**
 * @description - Generate a random color
 * @return {string} - Random color in hex format
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create the grid items with default number of squares
drawGrid(squaresPerSide)

// Button to change the number of squares

const btn = document.createElement('button')
btn.style.width = '150px'
btn.style.height = '50px'
btn.style.border = '2px solid black'
btn.style.borderRadius = '15px'
btn.style.margin = '10px'
btn.style.backgroundColor = 'aliceblue'
btn.textContent = 'Clear grid'

btn.addEventListener('click', () => {
    while (true) {
	    squaresPerSide = prompt('How many squares per side?')
        if (squaresPerSide > 100) {
            alert('Please enter a number between 1 and 100')
        }
        else {
            break
        }
    }

	removeGrid()
	drawGrid(squaresPerSide)
})

const page = document.querySelector('body')
page.insertBefore(btn, gridArea)
