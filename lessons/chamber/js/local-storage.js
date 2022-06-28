const totalVisits = document.querySelector(".total");
const since = document.querySelector(".visit");


let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("last-ls"));


if (numVisits !== 0) {
	totalVisits.textContent = numVisits;
} else {
	totalVisits.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);



if (lastVisit !== 0) {
    since.textContent = Math.round((Date.now() - lastVisit) / 86400000);
} else {
    since.textContent = `N/A`
}

localStorage.setItem("last-ls", Date.now())