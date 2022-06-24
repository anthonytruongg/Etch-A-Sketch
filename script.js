let body = document.body

const container = document.createElement('div')
container.setAttribute('class', 'container')
// BUTTON ---------------------------------------------------------
const button = document.createElement('button')
button.setAttribute('class', 'reset')
button.addEventListener("click", resize)
button.style.padding = "20px"
button.textContent = "Resize Sketch Pad"
button.style.fontSize = "32px"

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

// GRID -----------------------------------------------------------
function createGrid (rowNum, columnNum) {
    const columnContainer = document.createElement('div')
    columnContainer.setAttribute('class', 'columnContainer')

    for (var i = 1; i < rowNum; i++) {
        const columns = document.createElement('div')
        columns.setAttribute('class', 'column')
        // styling
        // columns.textContent = (i)
        // columns.style.padding = "10px"
        // columns.style.border = "2px solid black"
        columnContainer.append(columns)
    
        for (var x = 1; x < columnNum; x++) {
            const columnsTwo = document.createElement('div')
            columnsTwo.setAttribute('class', i)
    
        
            // styling
            //columnsTwo.textContent = (i)
            columnsTwo.style.padding = "20px"
            columnsTwo.style.border = "2px solid white"
            columnsTwo.style.backgroundColor = 'black'
    
            // event listeners
            columnsTwo.addEventListener('mouseover', e => {
                columnsTwo.style.backgroundColor = 'pink'
            })
            columnsTwo.addEventListener('mouseleave', e => {
                setTimeout(() => {
                    columnsTwo.style.backgroundColor = 'black'
    
                }, 250);
            })
            columns.append(columnsTwo)
        }
    }
    
    body.append(container, columnContainer)

}
// GRID -----------------------------------------------------------
function replaceGrid (rowNum, columnNum) {
    createGrid(rowNum,columnNum)
    var elem = document.querySelector('.columnContainer')
    elem.parentNode.removeChild(elem)
}
createGrid(17,17)
