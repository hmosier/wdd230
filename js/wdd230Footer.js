
const modified = new Date(document.lastModified);

const year = new Date();

const copyright = "\u00A9";

document.getElementById("copyright").innerHTML = `${copyright} ${year.getFullYear()} .:|:. Hannah Mosier .:|:. Ohio`;

document.getElementById("updated").innerHTML = `Last Updated: ${modified}`;