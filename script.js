import Accessories from "./accessory.js"

const userCards = document.querySelector(".user-cards")
const searchInput = document.querySelector("[data-search]")

var accessories = new Accessories()
var accessoryArray = accessories.accessories

createHTMLforCards()
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    accessoryArray.forEach(accessory => {
        const isVisible = accessory.name.toLowerCase().includes(value)
        document.getElementById(accessory.name).classList.toggle('hide', !isVisible)
    })
})

function createHTMLforCards() {
    for (var i = 0; i < accessoryArray.length; i++) {
        createHTML(accessoryArray[i])
    }
}

function createHTML(currentAccessory) {
    var div = document.createElement('div')
    var cardHeader = document.createElement('div')
    var cardBody = document.createElement('div')
    var cardImg = document.createElement('img')

    cardImg.setAttribute("src", currentAccessory.image); 
    div.id = currentAccessory.name

    div.classList.add("card")
    cardHeader.classList.add("header")
    cardBody.classList.add("body")
    cardImg.classList.add("card-img")

    cardHeader.innerHTML = currentAccessory.name
    cardBody.innerHTML = currentAccessory.description

    div.appendChild(cardImg)
    div.appendChild(cardHeader)
    div.appendChild(cardBody)
    userCards.appendChild(div)
}