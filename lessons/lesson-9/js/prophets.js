const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

let prophetsList = [];

const output = (prophets) => {
    prophets.forEach(
        prophet => {
            let card = document.createElement("section")

            let name = document.createElement("h2")
            name.textContent = `${prophet[i].name} ${prophet[i].lastname}`;

            let dob = document.createElement("p")
            dob.textContent = prophet[i].birthdate;

            let order = document.createElement("p")
            order.textContent = `${prophet[i].order} Latter-day President`;

            let portrait = document.createElement("img")
            portrait.setAttribute = (src, prophet[i].imageurl);
            portrait.setAttribute = (alt, `Portrait of ${prophet.name} ${prophet[i].lastname} - ${prophet[i].order} Latter-day President`);
            portrait.setAttribute = (loading, lazy);

            card.appendChild(name);
            card.appendChild(dob);
            card.appendChild(order);
            card.appendChild(portrait);

            document.querySelector("#cards").appendChild(card);
        }
    );
}

const getProphets = async () => {
    let response = await fetch(requestURL);
    prophetsList = await response.json();
    output(prophetsList);
    };
    getProphets();
