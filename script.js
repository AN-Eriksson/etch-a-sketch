// Define the grid area

const gridArea = document.querySelector('#gridArea');

let squaresPerSide = 32; // Sets the grid size - to be prompted of user later
let numberOfSquares = Math.pow(squaresPerSide, 2);

// Constants

const width = 960;
const height = 960;

gridArea.style.display = 'flex';
gridArea.style.outline = '1px solid black';
gridArea.style.flexWrap = 'wrap';
gridArea.style.width = `${width}px`;
gridArea.style.height = `${height}px`;

// Create the grid items

for (let i = 0; i < numberOfSquares; i++) {
    const gridItem = document.createElement('div');
    gridItem.style.flex = `1 0 ${width / squaresPerSide}px`;
    gridItem.style.outline = '1px solid black';

    // Add event listener to change color on hover
    gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('hover')})
    
    gridArea.appendChild(gridItem);
    
}

