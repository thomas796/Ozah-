
const recetteArray = [
    ["imageRecettes/Recette - Crêpe.jpg", "Recette", "Des crêpes pour le plaisir des petit.e.s et des grand.e.s, avec sa coulée de nutella pour les plus gourmandes…", "Recettes/recettes1.html"],
    ["imageRecettes/Recette - Crêpe.jpg", "Recette", "Des crêpes pour le plaisir des petit.e.s et des grand.e.s, avec sa coulée de nutella pour les plus gourmandes…", "Recettes/recettes1.html"],
    ["imageRecettes/Recette - Crêpe.jpg", "Recette", "Des crêpes pour le plaisir des petit.e.s et des grand.e.s, avec sa coulée de nutella pour les plus gourmandes…", "Recettes/recettes1.html"],
    ["imageRecettes/Recette - Crêpe.jpg", "Recette", "Des crêpes pour le plaisir des petit.e.s et des grand.e.s, avec sa coulée de nutella pour les plus gourmandes…", "Recettes/recettes1.html"],
    ["imageRecettes/Recette - Crêpe.jpg", "Recette", "Des crêpes pour le plaisir des petit.e.s et des grand.e.s, avec sa coulée de nutella pour les plus gourmandes…", "Recettes/recettes1.html"]
]


function setRecette() {
    console.log("recettes-liste")

    for (let [index, element] of recetteArray.entries()) {
        
        let container = document.createElement('div')
        container.id = "container"
        document.getElementById("recettesContainer").appendChild(container)

        let image = document.createElement('img')
        image.src = element[0]
        image.className = "recettesImage"
        container.appendChild(image)

        const recettesSubtitle = document.createElement('h1')
        recettesSubtitle.textContent = "[" + element[1] + "]"
        recettesSubtitle.className = "recettesSubtitle"
        container.appendChild(recettesSubtitle)

        const recettesText = document.createElement('h2')
        recettesText.textContent = element[2]
        recettesText.className = "recettesText"
        container.appendChild(recettesText)
        
        const recettesLink = document.createElement('a')
        recettesLink.textContent = "Lire la suite"
        recettesLink.className = "recettesLink"
        recettesLink.href = element[3]
        container.appendChild(recettesLink)

        if (recetteArray.length-1 === index) {
            for (i = 0; i < 10; i ++) {
                let empty = document.createElement('div')
                empty.id = "recetteEmpty"
                document.getElementById("recettesContainer").appendChild(empty)
            }
        }

    }

}


function setEpisode() {

    for (let [index, element] of episodeArray.entries()) {
  
        let container = document.createElement('div')
        container.id = "container"
        document.getElementById("rencontresContainer").appendChild(container)
        
        let image = document.createElement('img')
        image.src = element[0]
        image.className = "imageRencontres"
        container.appendChild(image)

        const episodeTitle = document.createElement('h1')
        episodeTitle.textContent = "[" + element[1] + "]"
        episodeTitle.id = "episodeTitle"
        container.appendChild(episodeTitle)

        const name = document.createElement('h2')
        name.textContent = element[2]
        name.id = "episodeName"
        container.appendChild(name)

        if (episodeArray.length-1 === index) {
            for (i = 0; i < 10; i ++) {
                let empty = document.createElement('div')
                empty.id = "episodeEmpty"
                document.getElementById("rencontresContainer").appendChild(empty)
            }
        }

    }
}



// #recettesContainers {
//     display: flex;
//     align-items: space-evenly;
//     justify-content: space-between;
//     width: 80%;
// }
// #recettesContainer {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-evenly;
// }
// .recettesImage {
//     width: 70%;
//     object-fit: scale-down;
//     margin-bottom: 8px;
// }
// .recettesSubtitle {
//     color: #ABB4C2;
//     font-family: Bahnschrift;
// }
// .recettesText {
//     font-family: Bahnschrift;
//     font-size: medium;
//     width: 70%;
// }
// .recettesLink {
//     width: 70%;
//     text-align: left;
//     text-decoration: none;
//     font-family: Bahnschrift;
//     font-weight: lighter;
//     color: #915833;
// }