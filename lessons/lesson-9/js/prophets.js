const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

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

function output (data) {
    data.prophets.forEach(prophet => {
            let card = document.createElement("section")
            let name = document.createElement("h2")
            let dob = document.createElement("p")
            let birthplace = document.createElement("p")
            let img = document.createElement("img")

            name.textContent = `${prophet.name} ${prophet.lastname}`;
            dob.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
            img.setAttribute = ("src", prophet.imageurl);
            img.setAttribute = ("alt", `Portrait of ${name} - ${prophet.order}th Latter-day President`);
            img.setAttribute = ("loading", "lazy");

            card.append(name);
            card.appendChild(dob);
            card.appendChild(birthplace);
            card.append(img);
            
            cards.append(card)
        }
    );
}
