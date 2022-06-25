let body = document.body

const container = document.createElement('div')
container.setAttribute('class', 'container')
// ---------------------------------------------------------
// Button - Resize
const button = document.createElement('button')
button.setAttribute('class', 'reset')
button.addEventListener("click", resize)
button.style.padding = "10px"
button.textContent = "Resize Sketch Pad"
button.style.fontSize = "15px"

function resize () {
    let rowNum = prompt("ENTER AMOUNT OF ROWS")
    if(rowNum > 100) {
        alert("Cannot go above 100")
        return 17
    } 
    let columnNum = prompt("ENTER AMOUNT OF COLUMNS")
    if(columnNum > 100) {
        alert("Cannot go above 100")
        return 17
    } 

    replaceGrid(rowNum, columnNum)
}

container.append(button)
// ---------------------------------------------------------

// ---------------------------------------------------------
// Grid Creation
const parentContainer = document.createElement('div')
parentContainer.setAttribute('class', 'parentContainer')


function createGrid (rowNum, columnNum) {
    const columnContainer = document.createElement('div')
    columnContainer.setAttribute('class', 'columnContainer')

    for (var i = 1; i <= rowNum; i++) {
        const columns = document.createElement('div')
        columns.setAttribute('class', 'column')
        // styling
        columnContainer.append(columns)
    
        for (var x = 1; x <= columnNum; x++) {
            const columnsTwo = document.createElement('div')
            columnsTwo.setAttribute('class', i)
            // styling
            columnsTwo.style.padding = "1.5px"
            columnsTwo.style.margin = "0"
            columnsTwo.style.border = "2px solid black"
            columnsTwo.style.backgroundColor = 'black'
            // event listeners
            columnsTwo.addEventListener('mouseover', e => {
                columnsTwo.style.backgroundColor = 'pink'
            })
            columnsTwo.addEventListener('mouseleave', e => {
                // setTimeout(() => {
                //     columnsTwo.style.backgroundColor = 'black'
                // }, );
            })
            columns.append(columnsTwo)
        }
    }
    parentContainer.append(columnContainer)
    body.append(container, parentContainer)

}
// ---------------------------------------------------------
// Deleting old Grid and replacing with new Grid

function replaceGrid (rowNum, columnNum) {
    createGrid(rowNum,columnNum)
    var elem = document.querySelector('.columnContainer')
    elem.parentNode.removeChild(elem)
}
// ---------------------------------------------------------
// Default grid 50x50
createGrid(50,50)
