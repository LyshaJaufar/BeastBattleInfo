import Accessories from "./accessory.js"
import Places from "./places.js"
import Spirits from "./spirits.js"

const userCards = document.querySelector(".user-cards")
const searchInput = document.querySelector("[data-search]")
const belowHeaderDiv = document.querySelector('.below-header')

var elementalsPage = false
var misfortunesPage = false
var amuletsPage = false
var otherPage = false
var jewelsPage = false
var armouryPage = false
var placesPage = false
var allPage = false
var spiritsPage = false

var length;

var accessories = new Accessories()
var places = new Places()
var spirits = new Spirits()
var placesArray = places.places
var spiritsArray = spirits.spirits

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
    var cardArray; 

    if (placesPage == true) {
        length = places.places.length;
        cardArray = placesArray
    }
    else if (spiritsPage == true) {
        length = spirits.spirits.length;
        cardArray = spiritsArray
    }
    else if (armouryPage == true || amuletsPage == true || otherPage == true ||
         misfortunesPage == true || elementalsPage == true || jewelsPage == true || allPage == true) {
            length = accessoryArray.length;
            cardArray = accessoryArray
    } 

    for (var i = 0; i < length; i++) {
        console.log(cardArray)
        createHTML(cardArray[i])
    }
}

function getPath() {
    var page = (window. location. pathname).split("/").pop();

    if (page == 'accessories.html') {
        allPage = true
        return accessories.allAccessories()
    } 
    else if (page == 'elementals.html') {
        elementalsPage = true
        spiritsPage = false, armouryPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, otherPage = false
        return accessories.theELementals()
    } 
    else if (page == 'misfortunes.html') {
        misfortunesPage = true
        spiritsPage = false, armouryPage = false, amuletsPage = false, jewelsPage = false, otherPage = false, elementalsPage = false, placesPage = false
        return accessories.misfortunes()
    } 
    else if (page == 'jewels.html') {
        jewelsPage = true
        spiritsPage = false, armouryPage = false, amuletsPage = false, otherPage = false, misfortunesPage = false, elementalsPage = false, placesPage = false
        return accessories.theJewels()
    }
    else if (page == 'amulets.html') {
        amuletsPage = true
        spiritsPage = false, armouryPage = false, otherPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false, placesPage = false
        return accessories.theAmulets()
    }
    else if (page == 'armoury.html') {
        armouryPage = true
        spiritsPage = false, otherPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false, placesPage = false
        return accessories.theArmoury()
    }
    else if (page == 'other.html') {
        otherPage = true
        spiritsPage = false, armouryPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false, placesPage = false
        return accessories.other()
    }
    else if (page == 'places.html') {
        placesPage = true
        spiritsPage = false, armouryPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false, otherPage = false
        return places;                                                                                                                                                          
    }
    else if (page == 'spirits.html') {
        spiritsPage = true
        placesPage = false, armouryPage = false, amuletsPage = false, jewelsPage = false, misfortunesPage = false, elementalsPage = false, otherPage = false
        return spirits;                                                                                                                                                          
    }
}

function createHTML(currentCard) {
    var div = document.createElement('div')
    var cardHeader = document.createElement('div')
    var cardBody = document.createElement('div')
    var cardImg = document.createElement('img')

    cardImg.setAttribute("src", currentCard.image); 
    div.id = currentCard.name

    div.classList.add("card")
    cardHeader.classList.add("header")
    cardBody.classList.add("body")
    cardImg.classList.add("card-img")

    cardHeader.innerHTML = currentCard.name
    cardBody.innerHTML = currentCard.description

    if (placesPage = true || armouryPage == true || amuletsPage == true || jewelsPage == true || elementalsPage == true || misfortunesPage == true) {
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