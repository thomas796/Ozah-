function knowMore() {
    let viewport_height = (1*window.innerHeight)-60;
    scroll(0, viewport_height);
}


const galeryArray = [['imageGalerie/image1.jpeg', 'voici la première image'],
['imageGalerie/image2.jpeg', 'voici la deuxième image'],
['imageGalerie/image3.jpeg', 'voici la troisième image'],
['imageGalerie/image1.jpeg', 'voici la quatrième image'],
['imageGalerie/image2.jpeg', 'voici la cinquième image'],
['imageGalerie/image3.jpeg', 'voici la sixième image']]


function createCarousel() {


    const carousel = document.getElementById("carousel")
    let item = convertInInt(localStorage.getItem("galeryItem"))

    if (item === null) {
        item = 0
    }

    let image = document.createElement('img')
    image.src = galeryArray[item][0]
    image.style.height = "90%"
    image.alt = 'image gallerie'
    image.style.marginLeft = "100px"
    image.style.objectFit = "scale-down"
    carousel.append(image)

    let description = document.createElement('p')
    description.innerText = galeryArray[item][1]
    description.style.width = "50%"
    description.style.fontFamily = "MinionPro-Medium"
    carousel.append(description)

}



function left() {
    const carousel = document.getElementById("carousel")
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
    const carousel = document.getElementById("carousel")
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

 