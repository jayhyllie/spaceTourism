const crewImage = document.querySelector('#crew--image');
const crewName = document.querySelector('.crew .main__section--head');
const crewBio = document.querySelector('.crew .main__section--text');
const crewRole = document.querySelector('.crew .crew__title');

function createCrew(e, crew) {
    let clickedLi = e.target;
    let clickedTitle = clickedLi.id;
    const clickedBody = crew.find(body => body.name.split(' ').shift().toLowerCase() === clickedTitle.toLowerCase());
    
    crewImage.setAttribute('src', clickedBody.images.webp);
    crewName.innerHTML = clickedBody.name;
    crewBio.innerHTML = clickedBody.bio;
    crewRole.innerHTML = clickedBody.role;
}

export { createCrew };