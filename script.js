import Accessories from "./accessory.js"
import Beasts from "./beasts.js"
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
var animalBeastsPage = false, firePage = false, waterPage = false, airPage = false, earthPage = false
var wizardsPage = false, allBeastsPage = false
var homePage = false
var isBeasts = false

var length;

var accessories = new Accessories()
var places = new Places()
var spirits = new Spirits()
var beasts = new Beasts()
var placesArray = places.places
var spiritsArray = spirits.spirits

getPath()
var accessoryArray = accessories.accessories
var beastArray = beasts.beasts

createHTMLforCards()
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()

    if (armouryPage == true || amuletsPage == true || otherPage == true ||
         misfortunesPage == true || elementalsPage == true || jewelsPage == true || allPage == true){
            accessoryArray.forEach(accessory => {
                const isVisible = accessory.name.toLowerCase().includes(value)
                document.getElementById(accessory.name).classList.toggle('hide', !isVisible)
            })
    }
    else if (placesPage == true) {
        placesArray.forEach(place => {
            const isVisible = place.name.toLowerCase().includes(value)
            document.getElementById(place.name).classList.toggle('hide', !isVisible)
        })
    }
    else if (spiritsPage == true) {
        spiritsArray.forEach(spirit => {
            const isVisible = spirit.name.toLowerCase().includes(value)
            document.getElementById(spirit.name).classList.toggle('hide', !isVisible)
        })
    } 
    else {
        beastArray.forEach(beast => {
            const isVisible = beast.name.toLowerCase().includes(value)
            document.getElementById(beast.name).classList.toggle('hide', !isVisible)
        })
    }
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
    else {
       isBeasts = true
    }

    if (isBeasts == false) {
        for (var i = 0; i < length; i++) {
            createHTML(cardArray[i])
        }
    } else {
        if (homePage == false) {
            for (var i = 0; i < beastArray.length; i++) {
                createBeastsHTML(beastArray[i])
            }
        } else {
            belowHeaderDiv.classList.add('shorten-about-page')
        }
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
        return accessories.theELementals()
    } 
    else if (page == 'misfortunes.html') {
        misfortunesPage = true
        return accessories.misfortunes()
    } 
    else if (page == 'jewels.html') {
        jewelsPage = true
        return accessories.theJewels()
    }
    else if (page == 'amulets.html') {
        amuletsPage = true
        return accessories.theAmulets()
    }
    else if (page == 'armoury.html') {
        armouryPage = true
        return accessories.theArmoury()
    }
    else if (page == 'other.html') {
        otherPage = true
        return accessories.other()
    }
    else if (page == 'places.html') {
        placesPage = true
        return places                                                                                                                                                      
    }
    else if (page == 'spirits.html') {
        spiritsPage = true
        return spirits                                                                                                                                                   
    }
    else if (page == 'fire.html') {
        firePage = true
        return beasts.fire()
    }
    else if (page == 'water.html') {
        waterPage = true
        return beasts.water()
    }
    else if (page == 'air.html') {
        airPage = true
        return beasts.air()
    }
    else if (page == 'earth.html') {
        earthPage = true
        return beasts.earth()
    }
    else if (page == 'animals.html') {
        animalBeastsPage = true
        return beasts.animal()
    }
    else if (page == 'beasts.html') {
        allBeastsPage = true
        return beasts.allBeasts()
    }
    else if (page == 'wizards.html') {
        wizardsPage = true
        return beasts.wizard()
    }
    else if (page == 'index.html') {
        homePage = true
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

    if (spiritsPage == true || placesPage == true || armouryPage == true || 
        amuletsPage == true || elementalsPage == true || misfortunesPage == true) {
        belowHeaderDiv.classList.add('shorten')
    }
    else if (jewelsPage == true) {
        belowHeaderDiv.classList.add('slightlyShortenBeastsPage')
    }
    else if (otherPage == true) {
        belowHeaderDiv.classList.add('shortenOtherPage')
    }

    div.appendChild(cardImg)
    div.appendChild(cardHeader)
    div.appendChild(cardBody)
    userCards.appendChild(div)

}

function createBeastsHTML(currentCard) {

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
    cardBody.innerHTML = currentCard.elemental
    
    if (animalBeastsPage == true) {
        belowHeaderDiv.classList.add('shortenBeastsPage')
    } else if (firePage == true) {
        belowHeaderDiv.classList.add('slightlyShortenBeastsPage')
    } else if (wizardsPage == true) {
        belowHeaderDiv.classList.add('very-shorten')
    } else if (allBeastsPage == true) {
        belowHeaderDiv.classList.add('shortenBeastsPage3')
    } else if (waterPage == true) {
        belowHeaderDiv.classList.add('waterBeastsPage')
    }   
    else {
        belowHeaderDiv.classList.add('shortenBeastsPage2')
    }

    div.appendChild(cardImg)
    div.appendChild(cardHeader)
    div.appendChild(cardBody)
    userCards.appendChild(div)
}