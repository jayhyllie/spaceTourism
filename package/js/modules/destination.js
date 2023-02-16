const planetList = [
    {
        title: 'Moon',
        image: '/package/assets/destination/image-moon.webp',
        info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 KM',
        travel: '3 days'
    },
    {
        title: 'Mars',
        image: '/package/assets/destination/image-mars.webp',
        info: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. KM',
        travel: '9 Months'
    },
    {
        title: 'Europa',
        image: '/package/assets/destination/image-europa.webp',
        info: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. KM',
        travel: '3 years'
    },
    {
        title: 'Titan',
        image: '/package/assets/destination/image-titan.webp',
        info: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. KM',
        travel: '7 years'
    }
];

const planets = document.querySelectorAll('.destination ul');
const planetsLi = document.querySelectorAll('.destination .main__section--list-planet');
const planetImage = document.querySelector('#destination--image');
const planetName = document.querySelector('.destination .main__section--head');
const planetInfo = document.querySelector('.destination .main__section--text');
const planetDistance = document.querySelector('.destination .info--distance h5');
const planetTravel = document.querySelector('.destination .info--travel h5');

const DATA_LINK = 'data.json';

async function getDestination() {
    let response = await fetch(DATA_LINK);
    let data = await response.json();

    let dests = data.destinations;
    console.log(dests);

    planets.forEach(planet => {
        planet.addEventListener('click', function (e) {
            let clickedLi = e.target;
            let clickedTitle = clickedLi.textContent;
            const clickedBody = planetList.find(body => body.title.toLowerCase() === clickedTitle.toLowerCase());
    
            planetImage.setAttribute('src', clickedBody.image);
            planetName.innerHTML = clickedBody.title;
            planetInfo.innerHTML = clickedBody.info;
            planetDistance.innerHTML = clickedBody.distance;
            planetTravel.innerHTML = clickedBody.travel;
        })
    })
    planetsLi.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            planetsLi.forEach(p => p.classList.remove('active'));
            e.target.classList.toggle("active");
        });
    });
}
getDestination();


