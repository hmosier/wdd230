const date = new Date();
const copyright = "\u00A9";

document.querySelector("#year").textContent = `${copyright} ${date.getFullYear()} .:. Last Updated: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primary").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger")
x.onclick = toggleMenu;
