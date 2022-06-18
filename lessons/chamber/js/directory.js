const source = "../json/data.json"
const cards = document.querySelector('.cards');

async function getBusinesses() {
    let response = await fetch(source);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
    } else {
        throw Error(response.statusText);
    }
}

getBusinesses();

function output (data) {
    data.business.forEach(business => {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let phone = document.createElement("p");
            let img = document.createElement("img");
            let address = document.createElement("p");
            let lvl = document.createElement("p");
            let url = document.createElement("p");
            let imgSource = `../images/${business.imageName}`

            img.setAttribute('src', `${imgSource}`);
            img.setAttribute('alt', `${name} logo`);
            img.setAttribute('loading', 'lazy');
            name.textContent = business.name;
            phone.textContent = business.phone;
            url.textContent = business.url;
            address.setAttribute = business.address;
            lvl.setAttribute = `Membership Level: ${business.level}`;

            card.append(img);
            card.append(name);
            card.appendChild(phone);
            card.appendChild(url);
            card.appendChild(address);
            card.appendChild(lvl);

            cards.append(card);
        }
    );
}

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// gridbutton.addEventListener("click", () => {
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });
