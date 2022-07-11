const source = "https://hmosier.github.io/wdd230/final/json/temples.json"
const cards = document.querySelector('.cards');

async function getTemples() {
    let response = await fetch(source);
    if (response.ok) {
        let data = await response.json();
        output(data);
    } else {
        throw Error(response.statusText);
    }
}

getTemples();

let number = 1;

function output(data) {
    const filter = data.temples.filter(value => value.country == 'United States').sort(function(){return 0.3 - Math.random()}).slice(0, 3);
    filter.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let phone = document.createElement("p");
        let services = document.createElement("p");
        let image = document.createElement("img");
        let announced = document.createElement("p");
        let groundbreaking = document.createElement("p");
        let dedicated = document.createElement("p");
        let rededicated = document.createElement("p");

        name.textContent = temple.name;
        phone.textContent = `Phone: ${temple.phone}`;
        services.innerHTML = `<a href=${temple.services} target="_blank">Available Services</a>`;
        
        image.setAttribute('src', temple.image);
        image.setAttribute('alt', temple.name);
        image.setAttribute('class', 'cards');

        announced.textContent = `Announced: ${temple.announced}`;
        groundbreaking.textContent = `Groundbreaking: ${temple.groundbreaking}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        rededicated.textContent = `Rededicated: ${temple.rededicated}`;

        card.appendChild(image);
        card.append(name);
        card.appendChild(phone);
        card.appendChild(services);
        card.appendChild(announced);
        card.appendChild(groundbreaking);
        card.appendChild(dedicated);
        card.appendChild(rededicated);

        cards.append(card);
        number += 1;
        }
    );
}