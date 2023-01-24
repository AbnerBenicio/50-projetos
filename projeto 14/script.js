const btn = document.getElementById("toggle")
const nav = document.querySelector("nav")

btn.addEventListener("click", ()=> {
    nav.classList.toggle("active")
})