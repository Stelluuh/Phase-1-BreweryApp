/*
GOAL: 3 Event Listeners:
1. mouseover that changes color of Breweries
2. mouseout that changes back to original color
3a. click event on breweries to show information
3b. Click event to toggle list of breweries: google "how to use toggle with a click event in javascript"
3. submit event to add a new brewery to the list

ASSESSMENT:
1. Know concepts and quizzes.
2. Explain your code
3. Live Coding

/*

/*------------------CREATE VARIABLES------------------*/
const h1 = document.createElement('h1')
const h4 = document.createElement('h4')
let getData = [] //copy of API data
let filterBrewery = []

/*------------------NODES------------------*/
const topContainer = document.querySelector('.top-container')
const breweryButton = document.querySelector('#list-btn')
const breweryContent = document.querySelector('.content')
const bottomContainer = document.querySelector('.bottom-container')
const form = document.querySelector('form')
const state = document.querySelector('#state')
const allButtons = document.querySelectorAll('.button')

/*------------------FUNCTIONS------------------*/

//1. function that when the page opens, it has all the html needed on the homepage.
function initializeHomePage() {
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
         data.map(element => getData.push({
            name: element.name,
            state: element.state
         })
         )
      })
}



//Function that displays brewery NAME and STATE
function toggleBreweries(e) {
   e.preventDefault()
   // console.log(e)
   if (breweryContent.hasChildNodes()) {
      removeBreweryList()
   } else {
      displayBreweryList()
      // handleMyList()
   }
}

function displayBreweryList() {
   for (item of getData) {
      const card = document.createElement('div')
      // div.className = `${item.name}`
      
      const li = document.createElement('li')
      // li.className = 'list'
      li.innerText = item.name
      
      const h5 = document.createElement('h5')
      // h5.className = 'state-list'
      h5.innerText = `State: ${item.state}`

      const h6 = document.createElement('h6')
      h6.innerText = `phone#: ${item.phone}`

      li.appendChild(h5, h6)
      card.appendChild(li)
      breweryContent.appendChild(card)

      bottomContainer.style.display = 'block' //shows bottom container when 'show breweries' bottom is clicked to show all breweries
   }
}

function removeBreweryList() {
   breweryContent.innerHTML = ""
   bottomContainer.style.display = 'none' //hides bottom container when the 'show breweries' button is clicked to hide all breweries
}

/*------------------EVENT HANDLERS------------------*/
//this takes in an event (because the event listener below calls this function)

function handleMyList(addBrewery) {
   //Takes new brewery and adds it to the list
   let li = document.createElement('li')
   let h5 = document.createElement('h5')
   let div = document.createElement('div')
   li.textContent = `${addBrewery} `
   h5.textContent = `State: ${state.value}`
   
   li.appendChild(h5)
   div.appendChild(li)
   
   breweryContent.appendChild(div)
   
   //Create a new object and add it to the copied API so that it doesn't refresh the page
   let newObj = {
      name: addBrewery,
      state: state.value
   }
   console.log('new obj: ', newObj)
   getData.push(newObj)
   console.log(getData)
   
}

/*give this a new function that creates a new object and takes in the new information and add it to getData
obj {
   name: ,
   state: 
  }
}
*/
/*------------------EVENT LISTENERS------------------*/

document.addEventListener('DOMContentLoaded', () => {
   initializeHomePage(); //loads page with all html content
   fetchandCopyData(); //copy of API data
   // allBreweries(); //function with event listener 'click' that shows a list of breweries

})

breweryButton.addEventListener('click', toggleBreweries)


allButtons.forEach(element => element.addEventListener('mouseover', (e) => {
   // console.log(e.target)
   e.target.setAttribute('style', 'background-color: #EC994B')
}))

allButtons.forEach(element => element.addEventListener('mouseout', (e) => {
   e.target.setAttribute('style', 'background-color: #FCF8EC')
}))

form.addEventListener('submit', (e) => {
   e.preventDefault()
   let textValue = e.target.new_brewery.value
   handleMyList(textValue)
});

