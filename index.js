/*
GOAL: 3 Event Listeners:
1a. mouseover that changes color of Breweries
1b. mouseout that changes back to original color
2. Click event to toggle list of breweries: google "how to use toggle with a click event in javascript"
3. submit event to add a new brewery to the list

ASSESSMENT:
1. Know concepts and quizzes.
2. Explain your code
3. Live Coding

/*

/*------------------CREATE VARIABLES------------------*/
let getData = [] //copy of API data

/*------------------NODES------------------*/
const topContainer = document.querySelector('.top-container')
const bottomContainer = document.querySelector('.bottom-container')
const breweryButton = document.querySelector('#list-btn')
const allButtons = document.querySelectorAll('.button')
const breweryContent = document.querySelector('.content')
const form = document.querySelector('form')
const state = document.querySelector('#state')

/*------------------EVENT LISTENERS------------------*/

document.addEventListener('DOMContentLoaded', () => {
   initializeHomePage(); //loads page with all html content
   fetchandCopyData(); //copy of API data
   // allBreweries(); //function with event listener 'click' that shows a list of breweries
})

breweryButton.addEventListener('click', toggleBreweries)

form.addEventListener('submit', (e) => {
   e.preventDefault()
   let textValue = e.target.new_brewery.value
   createNewCard(textValue)
});

allButtons.forEach(element => element.addEventListener('mouseover', (e) => {
   // console.log(e.target)
   e.target.setAttribute('style', 'background-color: #EC994B')
}))

allButtons.forEach(element => element.addEventListener('mouseout', (e) => {
   e.target.setAttribute('style', 'background-color: #FCF8EC')
}))

/*------------------EVENT HANDLERS------------------*/
//this takes in an event (because the event listener below calls this function)

//Function that shows a list of breweries
function toggleBreweries(e) {
   e.preventDefault()
   if (breweryContent.hasChildNodes()) {
      removeBreweryList()
   } else {
      displayBreweryList()
   }
}

//Takes new brewery and adds it to the list
function createNewCard(addBrewery) {
   let li = document.createElement('li')
   let h5 = document.createElement('h5')
   let div = document.createElement('div')
   li.textContent = `${addBrewery} `
   h5.textContent = `State: ${state.value}`

   li.appendChild(h5)
   div.appendChild(li)

   breweryContent.appendChild(div)

   //Create a new object and add it to the copied API so that it doesn't refresh the page
   
   // TRY doing a FETCH POST here.
   let newObj = {
      name: addBrewery,
      state: state.value
   }
   
   getData.push(newObj)
}

/*------------------FUNCTIONS------------------*/

//1. function that when the page opens, it has all the html needed on the homepage.
function initializeHomePage() {
   const h1 = document.createElement('h1')
   const h4 = document.createElement('h4')
   
   h1.innerHTML = 'Brewery Bound'
   h4.innerHTML = 'Journey with us across the United States and check out our favorite small and independent breweries.'
   h1.style.marginBottom = "25px"
   h4.style.marginBottom = "25px"

   topContainer.append(h1, h4)
   
   bottomContainer.style.display = 'none'
}

//2. create a copy of the API data
function fetchandCopyData() {
   fetch('https://api.openbrewerydb.org/breweries')
      .then(resp => (resp.json()))
      .then(data => {
         // console.log(data)
         data.map(element => getData.push({ //more use of data
            name: element.name,
            state: element.state
         })
         )
      })
}

function displayBreweryList() {
   for (item of getData) {
      const card = document.createElement('div')
      const li = document.createElement('li')
      li.innerText = item.name //Brewery Name
       
      const h5 = document.createElement('h5')
      h5.innerText = `State: ${item.state}` //State

      li.appendChild(h5)
      card.appendChild(li)
      breweryContent.appendChild(card)

      bottomContainer.style.display = 'block' //shows bottom container when 'show breweries' bottom is clicked to show all breweries
   }
}

function removeBreweryList() {
   breweryContent.innerHTML = ""
   bottomContainer.style.display = 'none' //hides bottom container when the 'show breweries' button is clicked to hide all breweries
}

