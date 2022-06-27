import Accessories from "./accessory.js"

const userCards = document.querySelector(".user-cards")
const searchInput = document.querySelector("[data-search]")
const belowHeaderDiv = document.querySelector('.below-header')

var elementalsPage = false
var misfortunesPage = false
var amuletsPage = false
var otherPage = false
var jewelsPage = false
var armouryPage = false

var accessories = new Accessories()
getPath()
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

function getPath() {
    var page = (window. location. pathname).split("/").pop();
    if (page == 'accessories.html') {
        return accessories.allAccessories()
    } 
    else if (page == 'elementals.html') {
        elementalsPage = true
        armouryPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, otherPage = false
        return accessories.theELementals()
    } 
    else if (page == 'misfortunes.html') {
        misfortunesPage = true
        armouryPage = false, amuletsPage = false, jewelsPage = false, otherPage = false, elementalsPage = false
        return accessories.misfortunes()
    } 
    else if (page == 'jewels.html') {
        jewelsPage = true
        armouryPage = false, amuletsPage = false, otherPage = false, misfortunesPage = false, elementalsPage = false
        return accessories.theJewels()
    }
    else if (page == 'amulets.html') {
        amuletsPage = true
        armouryPage = false, otherPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false
        return accessories.theAmulets()
    }
    else if (page == 'armoury.html') {
        armouryPage = true
        otherPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false
        return accessories.theArmoury()
    }
    else if (page == 'other.html') {
        otherPage = true
        armouryPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false
        return accessories.other()
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

    if (armouryPage == true || amuletsPage == true || jewelsPage == true || elementalsPage == true || misfortunesPage == true) {
        belowHeaderDiv.classList.add('shorten')
    }
    if (otherPage == true) {
        belowHeaderDiv.classList.add('shortenOtherPage')
    }

    div.appendChild(cardImg)
    div.appendChild(cardHeader)
    div.appendChild(cardBody)
    userCards.appendChild(div)
}