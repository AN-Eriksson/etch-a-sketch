// Define the grid area

const gridArea = document.querySelector('#gridArea');

// Default grid size

let squaresPerSide = 16;

// Constants - 960x960px grid

const width = 960;
const height = 960;

gridArea.style.display = 'flex';
gridArea.style.outline = '1px solid black';
gridArea.style.flexWrap = 'wrap';
gridArea.style.width = `${width}px`;
gridArea.style.height = `${height}px`;


// Functions

/**
 * @description -  Draw a grid of squaresPerSide x squaresPerSide
 * @param {*} squaresPerSide - Number of squares per side
 */
function drawGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide ** 2; i++) {
        const gridItem = document.createElement('div');
        gridItem.style.flex = `1 0 ${width / squaresPerSide}px`;
        gridItem.style.outline = '1px solid black';

        // Add event listener to change color on hover
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('hover');
        });

        gridArea.appendChild(gridItem);
    }
}

/**
 * @description - Remove all grid items
 */
function removeGrid() {
    while (gridArea.firstChild) {
        gridArea.removeChild(gridArea.firstChild);
    }
}

// Create the grid items with default number of squares
drawGrid(squaresPerSide);

// Button to change the number of squares

const btn = document.createElement('button');
btn.textContent = 'Squares per side?';
btn.addEventListener('click', () => {
   squaresPerSide = prompt('How many squares per side?');
   removeGrid();
   drawGrid(squaresPerSide);
   
})

const page = document.querySelector('body');
page.insertBefore(btn, gridArea);




