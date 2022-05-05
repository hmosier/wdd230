const date = new Date();
const copyright = "\u00A9";

document.querySelector("#year").textContent = `${copyright} ${date.getFullYear()} .:|:. Hannah Mosier .:|:. Ohio`;
document.querySelector("#updated").textContent = `Last Updated: ${document.lastModified}`;