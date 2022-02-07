
function setFooter(element) {
    let ifFolder = element
    if (element == null) {
        ifFolder = ""
    }
    
    let container = document.createElement('div')
    container.innerHTML = 
    '<footer>' +
        '<section id="logoCopyrightContainer">' +
            '<img id="OzaheWhite" src="' + ifFolder + 'Image/OzaheWhite.png" alt="copyright">' +
            '<section id="copyright">' +
                '<img id="copyrightImg" src="' + ifFolder + 'Image/copyrightGray.png" alt="copyright">' +
                '<p id="copyrightText">Copyright 2021 Ozahé. All rights reserved</p>' +
            '</section>' +
        '</section>' +
        '<section id="footerLink">' +
        '<a class="contactLink" href="contact.html">Gardons contact</a>' +
        '<div id="instaLink">' +
            '<a href="https://www.instagram.com/ozahe__/?hl=fr" target="_blank"><img id="instaLogo" src="' + ifFolder + 'Image/instaWhite.png" alt="logo instagram"></a>' +
            // '<a class="contactLink" href="https://www.instagram.com/ozahe__/?hl=fr" target="_blank">Rendez-vous sur insta</a>' +
        '</div>' +
    '</section>' +
    '</footer>';

    document.body.appendChild(container);

}