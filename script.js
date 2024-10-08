const gridArea = document.querySelector('#grid');



gridArea.style.display = 'flex';
gridArea.style.border = '1px solid black';
gridArea.style.flexWrap = 'wrap';

let calculatedWidth = 16 * 16;

gridArea.style.width = `${calculatedWidth}px`;


for (let i = 0; i < 16; i++) {

    for (let i = 0; i < 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.style.width = '16px';
        gridItem.style.height = '16px';
        gridItem.style.outline = '1px solid black';
        gridItem.style.backgroundColor = 'aliceblue';
        gridArea.appendChild(gridItem);
        
    }
}
