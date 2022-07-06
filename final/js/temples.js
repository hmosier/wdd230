const source = "https://hmosier.github.io/wdd230/final/json/temples.json"
const cards = document.querySelector('.cards');

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

function output(data) {
    data.temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let phone = document.createElement("p");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let lvl = document.createElement("p");
        let url = document.createElement("p");

        img.setAttribute('src', business.image);
        img.setAttribute('alt', `${business.name} logo`);
        img.setAttribute('class', 'cards');
        name.textContent = business.name;
        phone.textContent = business.phone;
        url.textContent = business.url;
        address.setAttribute = business.address;
        lvl.textContent = `Membership Level: ${business.level}`;

        card.appendChild(img);
        card.append(name);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(address);
        card.appendChild(lvl);

        cards.append(card);
        }
    );
}

const display = document.querySelector(".cards")