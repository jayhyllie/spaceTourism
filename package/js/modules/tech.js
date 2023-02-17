const techImage = document.querySelector('#tech--image');
const techName = document.querySelector('.tech .main__section--head');
const techBio = document.querySelector('.tech .main__section--text');

function createTech(e, tech) {
    let clickedLi = e.target;
    let clickedTitle = clickedLi.id;
    const clickedBody = tech.find(body => body.name.split(' ').shift().toLowerCase() === clickedTitle.toLowerCase());
    
    if (window.innerWidth < 880) {
        techImage.setAttribute('src', clickedBody.images.landscape);
    } else {
        techImage.setAttribute('src', clickedBody.images.portrait);
    }
    techName.innerHTML = clickedBody.name;
    techBio.innerHTML = clickedBody.description;
}

export { createTech };