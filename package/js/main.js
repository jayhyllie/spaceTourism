import { createPlanet } from "./modules/destination.js";
import { createCrew } from "./modules/crew.js";
import { createTech } from "./modules/tech.js";

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


async function getCrew() {
    let response = await fetch('data.json');
    let data = await response.json();

    let crewMembers = data.crew;
    const crews = document.querySelectorAll('.crew ul');
    const crewLi = document.querySelectorAll('.crew .main__section--list-crew');
    
    crews.forEach(crew => {
        crew.addEventListener('click', function (e) {
            createCrew(e, crewMembers);
        })
    })

    crewLi.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            crewLi.forEach(p => p.classList.remove('active'));
            e.target.classList.toggle("active");
        });
    });
}
getCrew();

async function getTech() {
    let response = await fetch('data.json');
    let data = await response.json();

    let techParts = data.technology;
    const techs = document.querySelectorAll('.tech ul');
    const techLi = document.querySelectorAll('.tech .main__section--list-tech');
    
    techs.forEach(tech => {
        tech.addEventListener('click', function (e) {
            createTech(e, techParts);
        })
    })

    techLi.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            techLi.forEach(p => p.classList.remove('active'));
            e.target.classList.toggle("active");
        });
    });
}
getTech();
