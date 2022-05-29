function toggleMenu() {
    document.getElementById("primary").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger")
x.onclick = toggleMenu;

const datefieldUK = document.querySelector("#currentDate");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


const date = new Date();
const copyright = "\u00A9";
document.querySelector("#year").textContent = `${copyright} ${date.getFullYear()} | Chillicothe Mound Chamber of Commerce | Hannah Mosier | WDD 230 Project | Last Modification: ${document.lastModified}`;

let weekDay = date.getDay();
let message = null;
if (weekDay === 1 || weekDay === 2) {
    message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    message = null;
}
document.querySelector("#message").textContent = message;