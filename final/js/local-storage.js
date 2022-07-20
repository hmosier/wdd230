const likeBtn = document.querySelector(".like");
const unlikeBtn = document.querySelector(".liked");

likeBtn.addEventListener("click", () => {
    display.classList.add("liked");
    display.classList.remove("like");
    localStorage.setItem = ("storedLike", "liked");
});

unlikeBtn.addEventListener("click", () => {
    display.classList.add("like");
    display.classList.remove("liked");
    localStorage.setItem = ("storedLike", "like")
});

window.addEventListener('DOMContentLoaded', e => {
    display.classList = localStorage.getItem("storedLike");
});