import { createPlanet } from "./modules/destination.js";

const primaryNav = document.querySelector('.primary__nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

async function getDestinations() {
    let response = await fetch('data.json');
    let data = await response.json();

    let destinations = data.destinations;
    const planets = document.querySelectorAll('.destination ul');
    const planetsLi = document.querySelectorAll('.destination .main__section--list-planet');
    
    planets.forEach(planet => {
        planet.addEventListener('click', function (e) {
            createPlanet(e, destinations);
        })
    })

    planetsLi.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            planetsLi.forEach(p => p.classList.remove('active'));
            e.target.classList.toggle("active");
        });
    });
}
getDestinations();
