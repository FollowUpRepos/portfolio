const webHeading = document.getElementsByClassName('showStyle')[0];
const allSectionWeb = Array.from(document.getElementsByClassName("hi"))
// function testClick(){
//   webHeading.classList.toggle("headline--active")

// allSectionWeb.map(ele=>{
//     ele.classList.toggle("d-none")  
//     ele.classList.toggle("card-hidden")
//     ele.classList.toggle("fullWidth")

//     return
// })

// }


// Show only Creativity elements when h3.creativStyle is clicked 
const createHeading = document.getElementsByClassName('creativStyle')[0];
const allCreativ = Array.from(document.getElementsByClassName('creativ'));
console.log(allCreativ)

// function create() {
//     console.log("hello")
//     createHeading.classList.toggle("headline--active")
//     allCreativ.map(ele=>{
        
//             ele.classList.toggle("d-none")  
//             ele.classList.toggle("card-hidden")
//             ele.classList.toggle("fullWidth")
//             testClick()
//             return
     
//      })
// }

// createHeading.addEventListener("click", create)


const allHeadings = [ webHeading, createHeading ]
const allInfo = [ allSectionWeb, allCreativ ]


const showOnly = ( header, info ) => {
    // HEADINGS
    allHeadings.forEach( heading => {
        if (heading === header) {
            // Highlight this heading
            heading.classList.add("headline--active")
        } else {
            // Dim this heading
            heading.classList.remove("headline--active")
        }
    })

    // INFO

    allInfo.forEach( anInfo => {
        if (anInfo === info) {
            anInfo.map( ele => {
                ele.classList.remove("d-none")  
                ele.classList.remove("card-hidden")
                ele.classList.add("fullWidth")
            })
        } else {
            anInfo.map( ele => {
                ele.classList.add("d-none")  
                ele.classList.add("card-hidden")
                ele.classList.remove("fullWidth")
            })
        }
    })
}


const webClick = () => {
  showOnly( webHeading, allSectionWeb )
}


const createClick = () => {
  showOnly( createHeading, allCreativ )
}


webHeading.addEventListener("click", webClick);
createHeading.addEventListener("click", createClick)
