
window.addEventListener('scroll', function(e) {
    let posY = window.scrollY;

    if (posY < 100) {
        document.getElementById("myHeader").style.backgroundColor = "rgba(255, 255, 255,"+ posY/100 + ")"
        document.getElementById("myHeader").style.boxShadow = "0 0px 0px 0px"

        document.getElementById("myHeader").style.boxShadow = "0 4px 2px -2px rgba(230, 225, 225,"+ posY/200 + ")"
    } else {
        document.getElementById("myHeader").style.backgroundColor = "white"
    }

   })