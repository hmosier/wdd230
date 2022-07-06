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

function output(data) {
    data.temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let street = document.createElement("p");
        let city = document.createElement("p");
        let country = document.createElement("p");
        let phone = document.createElement("p");
        let services = document.createElement("p");
        let image = document.createElement("img");
        let announced = document.createElement("p");
        let groundbreaking = document.createElement("p");
        let dedicated = document.createElement("p");
        let rededicated = document.createElement("p");
        let schedule = document.createElement("p");

        name.textContent = temple.name;
        street.textContent = `Address: ${temple.street}`;
        city.textContent = temple.city;
        country.textContent = temple.country;
        phone.textContent = `Phone: ${temple.phone}`;
        services.innerHTML = `<a href=${temple.services} target="_blank">Available Services</a>`;
        
        image.setAttribute('src', temple.image);
        image.setAttribute('alt', `${temple.name} logo`);
        image.setAttribute('class', 'cards');

        announced.textContent = `Announced: ${temple.announced}`;
        groundbreaking.textContent = `Groundbreaking: ${temple.groundbreaking}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        rededicated.textContent = `Rededicated: ${temple.rededicated}`;
        schedule.innerHTML = `<a href=${temple.schedule} target="_blank">Schedule an Appointment</a>`;

        card.appendChild(image);
        card.append(name);
        card.appendChild(street);
        card.appendChild(city);
        card.appendChild(country);
        card.appendChild(phone);
        card.appendChild(services);
        card.appendChild(announced);
        card.appendChild(groundbreaking);
        card.appendChild(dedicated);
        card.appendChild(rededicated);
        card.appendChild(schedule);

        cards.append(card);
        }
    );
}

// const display = document.querySelector(".cards")