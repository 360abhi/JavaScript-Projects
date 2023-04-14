const navHero  = document.querySelector(".hero")
const navServices  = document.querySelector(".services")
const navPrices  = document.querySelector(".prices")
const navContact  = document.querySelector(".contact")


document.querySelector('.nhero').addEventListener("click", () => {
    navHero.scrollIntoView({behavior: "smooth"});
})

document.querySelector('.nservices').addEventListener("click", () => {
    navServices.scrollIntoView({behavior: "smooth"});
})

document.querySelector('.nprices').addEventListener("click", () => {
    navPrices.scrollIntoView({behavior: "smooth"});
})

