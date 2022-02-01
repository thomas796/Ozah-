
const episodeArray = [
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine"],
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine"],
    ["Image/Rencontres - Episode 1.jpg", "Épisode1", "Avec Antoine"]
]



function setEpisode() {

    for (const element of episodeArray) {
        console.log(element)

        const image = document.createElement('image')
        image.src = ".../"+element[0]
        image.style.height = "100px"
        image.style.width = "100px"
        document.getElementById("rencontresContainer").appendChild(image)

        const episodeTitle = document.createElement('image')
        episodeTitle.textContent = element[1]
        episodeTitle.style.height = "100px"
        episodeTitle.style.width = "100px"
        document.getElementById("rencontresContainer").appendChild(episodeTitle)

        
    }


}