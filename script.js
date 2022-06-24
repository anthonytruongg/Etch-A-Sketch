let body = document.body

// GRID -----------------------------------------------------------
const columnContainer = document.createElement('div')
columnContainer.setAttribute('class', 'columnContainer')



for (var i = 1; i < 17; i++) {
    const columns = document.createElement('div')
    columns.setAttribute('class', 'column')
    // styling
    // columns.textContent = (i)
    // columns.style.padding = "10px"
    // columns.style.border = "2px solid black"
    columnContainer.append(columns)

    for (var x = 1; x < 17; x++) {
        const columnsTwo = document.createElement('div')
        columnsTwo.setAttribute('class', i.toString())

    
       // styling
        //columnsTwo.textContent = (i)
        columnsTwo.style.padding = "20px"
        columnsTwo.style.border = "2px solid white"
        columnsTwo.style.backgroundColor = 'black'

        columnsTwo.addEventListener('mouseover', e => {
            columnsTwo.style.backgroundColor = 'pink'
        })

        columnsTwo.addEventListener('mouseleave', e => {
            setTimeout(() => {
                columnsTwo.style.backgroundColor = 'black'

            }, 1000);
        })


        columns.append(columnsTwo)

    
    }
}
// ----------------------------------------------------------------



// addGlobalEventListener("mouseover", "", e => {
//     columnsTwo.style.backgroundColor = "green"
// })

// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, e => {
//         if(e.target.matches(selector)) callback(e)
//     })
// }



// ----------------------------------------------------------------

body.append(columnContainer)


