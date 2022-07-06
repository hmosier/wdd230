const date = new Date();
const copyright = "\u00A9";

document.querySelector("#year").textContent = `${copyright} ${date.getFullYear()} .:. Last Updated: ${document.lastModified}`;