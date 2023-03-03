// const webHeading = document.getElementsByClassName('showStyle')[0];
// const allSectionWeb =document.getElementsByClassName("hi")

// function testClick(){
//   webHeading.classList.toggle("headline--active")

// Array.from(allSectionWeb).map(ele=>{
//     ele.classList.toggle("d-none")  
//     ele.classList.toggle("card-hidden")
//     ele.classList.toggle("fullWidth")

//     return
// })

// }


// webHeading.addEventListener("click",testClick);

const createHeading = document.getElementsByClassName('creativStyle')[0];
const allCreativ = document.getElementsByClassName('creativ');
console.log(allCreativ)
function create() {
    console.log("hello")
    createHeading.classList.toggle("headline--active")
    Array.from(allCreativ).map(ele=>{
        
            ele.classList.toggle("d-none")  
            ele.classList.toggle("card-hidden")
            ele.classList.toggle("fullWidth")
            testClick()
            return
     
     })
}

createHeading.addEventListener("click", create)