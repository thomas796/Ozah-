
let item = 0
let lastItem = 0

const galeryArray = [
['image2.jpeg', 'Sur son lit de tomate', 'La mozzarella di Buffala et sa mini baguette'],
['image3.jpeg', 'Test titre 3', 'voici la troisième image'],
['image1.jpeg', 'Test titre 4', 'voici la quatrième image'],
['image2.jpeg', 'Sur son lit de tomate', 'La mozzarella di Buffala et sa mini baguette'],
['image3.jpeg', 'Test titre 3', 'voici la troisième image'],
['image1.jpeg', 'Test titre 4', 'voici la quatrième image']
]

function createCarousel() {
    



    let imageGalerie = document.getElementById('imageGalerie')
    imageGalerie.src = 'imageGalerie/' + galeryArray[item][0]

    let galerieSubtitle = document.getElementById('galerieSubtitle')
    galerieSubtitle.textContent = '[' + galeryArray[item][1] + ']'

    let descriptionGalerie = document.getElementById('descriptionGalerie')
    descriptionGalerie.innerText = galeryArray[item][2]



    

}

function left() {

    item -= 1

    if (item === -1) {
        item = galeryArray.length-1
    }

    createCarousel()
}

function right() {
    item += 1

    if (item === galeryArray.length) {
        item = 0
    }
    createCarousel()
}










// function createCarousel() {
    
//     const carousel = document.getElementById("carouselContentGalerie")
//     // carousel.style.opacity = "0"
//     // carousel.style.transitionDuration = "2000ms"

//     // let item = convertInInt(localStorage.getItem("galeryItem"))

//     // if (item === null) {
//     //     item = 0
//     // }



//     let imageGalerie = document.getElementById('imageGalerie')
//     imageGalerie.src = 'imageGalerie/' + galeryArray[item][0]

//     let galerieSubtitle = document.getElementById('galerieSubtitle')
//     galerieSubtitle.textContent = '[' + galeryArray[item][1] + ']'

//     let descriptionGalerie = document.getElementById('descriptionGalerie')
//     descriptionGalerie.innerText = galeryArray[item][2]



//     // carousel.style.opacity = "1"

// }







// function left() {
//     let imageGalerie = document.getElementById('imageGalerie')
//     imageGalerie.src = ""

//     let galerieSubtitle = document.getElementById('galerieSubtitle')
//     galerieSubtitle.textContent = ""

//     let descriptionGalerie = document.getElementById('descriptionGalerie')
//     descriptionGalerie.innerText = ""

//     // const carousel = document.getElementById("carouselContentGalerie")
//     // carousel.style.transitionDuration = "180ms"
//     // carousel.style.opacity = "0.9"

//     let getItem = convertInInt(localStorage.getItem("galeryItem"))

//     let newposition = getItem-1
//     if (newposition < 0) {
//         newposition = galeryArray.length-1
//     } 

//     localStorage.setItem("galeryItem", newposition)
//     location.reload()

//     // setTimeout(function(){
//     //   location.reload()
//     // }, 180)
// }

// function right() {

//     let imageGalerie = document.getElementById('imageGalerie')
//     imageGalerie.src = ""

//     let galerieSubtitle = document.getElementById('galerieSubtitle')
//     galerieSubtitle.textContent = ""

//     let descriptionGalerie = document.getElementById('descriptionGalerie')
//     descriptionGalerie.innerText = ""


//     // const carousel = document.getElementById("carouselContentGalerie")
//     // carousel.style.transitionDuration = "180ms"
//     // carousel.style.opacity = "0.9"
//     let getItem = convertInInt(localStorage.getItem("galeryItem"))

//     let newposition = getItem+1
//     if (newposition === galeryArray.length) {
//         newposition = 0
//     }


//     localStorage.setItem("galeryItem", newposition)
//     location.reload()

//     // localStorage.setItem("galeryItem", newposition)
//     // setTimeout(function(){
//     //   location.reload()
//     // }, 180)
// }


// function convertInInt(elem) {
//     if (elem !== null) {
//         if (isNumeric(elem)) {
//             let elemInt = parseInt(elem, 10)
//             return elemInt
//         } else {
//             return 0
//         }
//     } else {
//         return 0
//     }
// }


// function isNumeric(str) {
//     if (typeof str != "string") return false  
//     return !isNaN(str) && 
//         !isNaN(parseFloat(str)) 
// }

 