const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
let scriptList = []

button.addEventListener("click", () => {
    if (input.value.length == 0) { 
        alert("Field cannot be blank");
        return false; 
    }
    const item = document.createElement("li");
    const scripture = document.createElement("span");
    const btn = document.createElement("button");

    const favScript = input.value;
    input.value = "";

    item.appendChild(scripture);
    scripture.textContent = favScript;
    scriptList.append = favScript;
    item.appendChild(btn);
    btn.textContent = "❌"
    let delbtn = btn;
    delbtn.ariaLabel = "Close dialog"

    list.appendChild(item);

    btn.addEventListener("click", () => {
        list.removeChild(item);
    });
    input.focus();
});