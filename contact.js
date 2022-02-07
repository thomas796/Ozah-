

function submitForm() {
    let contactName = document.getElementById('contactName').value
    let contactEmail = document.getElementById('contactEmail').value
    let contactMessage = document.getElementById('contactMessage').value
    


    let messageErrorTextcontent = ""
    let messageErrorHeight = "0px"

    console.log(validateEmail(contactEmail))

    if (validateEmail(contactEmail) == null) {
        messageErrorTextcontent = "Adresse mail non valide"
        messageErrorHeight = "20px"
    }

    if (validateEmail(contactEmail) == null) {
        messageErrorTextcontent = "Adresse mail non valide"
        messageErrorHeight = "20px"
    }

    if (contactName === "" || contactEmail === "" || contactMessage === "") {
        messageErrorTextcontent = "Tous les champs doivent être remplis"
        messageErrorHeight = "20px"
    }


    let messageError = document.getElementById('messageError')
    messageError.textContent = messageErrorTextcontent
    messageError.style.height = messageErrorHeight

    

}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


