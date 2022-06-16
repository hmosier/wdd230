const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

function output (prophets) {
    prophets.forEach(
        prophet => {
            let card = document.createElement("section")

            let name = document.createElement("h2")
            name.textContent = `${prophet.name} ${prophet.lastname}`;

            let dob = document.createElement("p")
            dob.textContent = `Date of Birth: ${prophet.birthdate}`;

            let birthplace = document.createElement("p")
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

            let portrait = document.createElement("img")
            portrait.setAttribute = (src, prophet.imageurl);
            portrait.setAttribute = (alt, `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
            portrait.setAttribute = (loading, lazy);

            card.appendChild(name);
            card.appendChild(dob);
            card.appendChild(order);
            card.appendChild(portrait);
        }
    );
}

async function getProphets() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        output(data);
    } else {
        throw Error(response.statusText);
    }
}

getProphets();