const source = "https://hmosier.github.io/wdd230/lessons/chamber/json/data.json"
const spotlights = document.querySelector('#spotlight');

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

function output (data) {
    data.business.forEach(business => {
            let spotlight = document.createElement("div");
            let name = document.createElement("h3");
            let img = document.createElement("img");
            let address = document.createElement("p");
            let url = document.createElement("p");
            let phone = document.createElement("p");

            img.setAttribute('src', business.image);
            img.setAttribute('alt', `${business.name} logo`);
            img.setAttribute('loading', 'lazy');
            div.setAttribute('class', "spotlight")

            name.textContent = business.name;
            phone.textContent = business.phone;
            url.textContent = business.url;
            address.textContent = business.address;

            card.append(name);
            card.appendChild(img);
            card.appendChild(phone);
            card.appendChild(url);
            card.appendChild(address);

            spotlights.append(spotlight);
        }
    );
}