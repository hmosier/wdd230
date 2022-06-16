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
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let dob = document.createElement("p");
            let birthplace = document.createElement("p");
            let img = document.createElement('img');

            let fullName = `${prophet.name} ${prophet.lastname}`;

            h2.textContent = `${fullName}`;
            dob.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', `Portrait of President ${fullName} - ${prophet.order}th Latter-day President`);
            img.setAttribute('loading', 'lazy');

            card.append(h2);
            card.appendChild(dob);
            card.appendChild(birthplace);
            card.append(img);

            cards.append(card);
        }
    );
}
