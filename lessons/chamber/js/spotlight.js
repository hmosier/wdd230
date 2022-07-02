const source = "https://hmosier.github.io/wdd230/lessons/chamber/json/data.json"
const cards = document.querySelector('.spotlight');

async function getBusinesses() {
    let response = await fetch(source);
    if (response.ok) {
        let data = await response.json();
        output(data);
    } else {
        throw Error(response.statusText);
    }
}

getBusinesses();

let number = 1;

function output(data) {
    const filter = data.business.filter(value => value.level == 'gold' || value.level == 'silver').sort(function(){return 0.3 - Math.random()}).slice(0, 3);
    filter.forEach(business => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let img = document.createElement("img");
        let phone = document.createElement("p");
        let url = document.createElement("p");

        img.setAttribute('src', business.image);
        img.setAttribute('alt', `${business.name} logo`);
        img.setAttribute('class', 'spot-img')

        card.setAttribute('class', `placeholder-box spot${number}`);

        name.textContent = business.name;
        phone.textContent = business.phone;
        url.textContent = business.url;

        card.appendChild(img);
        card.append(name);
        card.appendChild(phone);
        card.appendChild(url);

        cards.append(card);
        number += 1;
    });
}