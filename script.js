const gridArea = document.querySelector('#gridArea');



gridArea.style.display = 'flex';
gridArea.style.outline = '1px solid black';
gridArea.style.flexWrap = 'wrap';

gridArea.style.justifyContent = 'flex-start';

let squaresPerSide = 16; // Sets the grid size - to be prompted of user later

gridArea.style.width = '960px'
gridArea.style.height = '960px'

for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridItem = document.createElement('div');
    gridItem.style.flex = `1 0 ${960 / squaresPerSide}px`;


    gridItem.style.outline = '1px solid black';
    gridItem.style.backgroundColor = 'aliceblue';
    gridArea.appendChild(gridItem);
        
}

