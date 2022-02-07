
const episodeArray = [
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine", "Rencontres/rencontres1.html"],
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine", "Rencontres/rencontres1.html"],
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine", "Rencontres/rencontres1.html"],
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine", "Rencontres/rencontres1.html"],
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine", "Rencontres/rencontres1.html"]
]



function setEpisode() {

    for (let [index, element] of episodeArray.entries()) {
  
        let container = document.createElement('a')
        container.id = "container"
        container.href = element[3]
        document.getElementById("rencontresContainer").appendChild(container)
        
        let image = document.createElement('img')
        image.src = element[0]
        image.className = "imageRencontres"
        container.appendChild(image)

        const episodeTitle = document.createElement('h1')
        episodeTitle.textContent = "[" + element[1] + "]"
        episodeTitle.id = "episodeTitle"
        container.appendChild(episodeTitle)

        const name = document.createElement('a')
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


