

const galeryArray = [
['image2.jpeg', 'Sur son lit de tomate', 'La mozzarella di Buffala et sa mini baguette'],
['image3.jpeg', 'Test titre 3', 'voici la troisième image'],
['image1.jpeg', 'Test titre 4', 'voici la quatrième image']
]


// function discover() {
//     let viewport_height = (1*window.innerHeight)-60;
//     scroll(0, viewport_height);
// }


function createCarousel() {

    let item = convertInInt(localStorage.getItem("galeryItem"))

    if (item === null) {
        item = 0
    }

    let imageGalerie = document.getElementById('imageGalerie')
    imageGalerie.src = 'imageGalerie/' + galeryArray[item][0]

    let galerieSubtitle = document.getElementById('galerieSubtitle')
    galerieSubtitle.textContent = '[' + galeryArray[item][1] + ']'

    let descriptionGalerie = document.getElementById('descriptionGalerie')
    descriptionGalerie.innerText = galeryArray[item][2]

}



function left() {
    const carousel = document.getElementById("carouselContentGalerie")
    carousel.style.transitionDuration = "180ms"
    carousel.style.opacity = "0.9"

    let getItem = convertInInt(localStorage.getItem("galeryItem"))

    let newposition = getItem-1
    if (newposition < 0) {
        newposition = galeryArray.length-1
    } 

    localStorage.setItem("galeryItem", newposition)
    setTimeout(function(){
      location.reload()
    }, 180)
}

function right() {
    const carousel = document.getElementById("carouselContentGalerie")
    carousel.style.transitionDuration = "180ms"
    carousel.style.opacity = "0.9"
    let getItem = convertInInt(localStorage.getItem("galeryItem"))

    let newposition = getItem+1
    if (newposition === galeryArray.length) {
        newposition = 0
    }

    localStorage.setItem("galeryItem", newposition)
    setTimeout(function(){
      location.reload()
    }, 180)
}


function convertInInt(elem) {
    if (elem !== null) {
        if (isNumeric(elem)) {
            let elemInt = parseInt(elem, 10)
            return elemInt
        } else {
            return 0
        }
    } else {
        return 0
    }
}


function isNumeric(str) {
    if (typeof str != "string") return false  
    return !isNaN(str) && 
        !isNaN(parseFloat(str)) 
}

 