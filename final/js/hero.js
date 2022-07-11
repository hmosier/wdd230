const source = "https://hmosier.github.io/wdd230/final/json/temples.json"
const heroCard = document.querySelector('.hero');

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
    const filter = data.temples.filter(value => value.country == 'United States').sort(function(){return 0.3 - Math.random()}).slice(0, 1);
    filter.forEach(temple => {
        let hero = document.createElement("section");

        let image = document.createElement("img");

        image.setAttribute('src', temple.image);
        image.setAttribute('alt', temple.name);

        hero.appendChild(image);

        hero.append(heroCard);
        }
    );
}