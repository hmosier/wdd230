const date = new Date();
const currentYear = date.getFullYear();
const copyright = "\u00A9";

document.querySelector("#year").textContent = `${copyright} ${currentYear} .:|:. Hannah Mosier .:|:. Ohio`;
document.querySelector("#updated").textContent = `Last Updated: ${document.lastModified}`;