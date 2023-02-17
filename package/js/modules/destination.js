const planetImage = document.querySelector('#destination--image');
const planetName = document.querySelector('.destination .main__section--head');
const planetInfo = document.querySelector('.destination .main__section--text');
const planetDistance = document.querySelector('.destination .info--distance h5');
const planetTravel = document.querySelector('.destination .info--travel h5');

function createPlanet(e, destinations) {
    let clickedLi = e.target;
    let clickedTitle = clickedLi.textContent;
    const clickedBody = destinations.find(body => body.name.toLowerCase() === clickedTitle.toLowerCase());
    
    planetImage.setAttribute('src', clickedBody.images.webp);
    planetName.innerHTML = clickedBody.name;
    planetInfo.innerHTML = clickedBody.description;
    planetDistance.innerHTML = clickedBody.distance;
    planetTravel.innerHTML = clickedBody.travel;
}

export { createPlanet };



