/*
GOAL: 3 Event Listeners:
1. mouseover that changes color of Breweries
2. mouseout that changes back to original color
3a. click event on breweries to show information
3b. Click event to toggle list of breweries: google "how to use toggle with a click event in javascript"
3. submit event to search(filter) by state

ASSESSMENT:
1. Know concepts and quizzes.
2. Explain your code
3. Live Coding

/*

/*------------------CREATE VARIABLES------------------*/
const h1 = document.createElement('h1')
const h4 = document.createElement('h4')
const getData = [] //copy of API data
let filterBrewery = []

/*------------------NODES------------------*/
const mainHeader = document.querySelector('#main-heading')
const breweryButton = document.querySelector('#list-btn')
const breweryContent = document.querySelector('.content')
// const list = document.querySelectorAll('li')
const searchInput = document.querySelector('#search-input')
const form = document.querySelector('form')
const formContent = document.querySelector('#form-content')
const state = document.querySelector('#state')





/*------------------FUNCTIONS------------------*/

//1. function that when the page opens, it has all the html needed on the homepage.
function initializeHomePage() {
   h1.innerHTML = 'Brewery Bound'   
   h4.innerHTML = 'Journey with us across the United States and check out our favorite small and independent breweries.'

   h4.style.margintTop = "10px"
   h4.style.marginBottom = "10px"

   mainHeader.append(h1,h4)
}

//2. create a copy of the API data
function fetchandCopyData() {
   fetch('https://api.openbrewerydb.org/breweries')
   .then(resp=>(resp.json()))
   .then(data => {
      console.log(data)
      data.map(element => getData.push({
            name: element.name,
            state: element.state,
            phone: element.phone
         })
      )
   })
}



//Function that displays brewery NAME and STATE
function displayBreweryList() {
   for(item of getData){
      const div = document.createElement('div')
      div.className = `${item.state}`
      
      const li = document.createElement('li')
      li.className = 'list'
      li.innerText = item.name

      const h5 = document.createElement('h5')
      h5.className = 'state-list'
      h5.innerText = `State: ${item.state}`
      
      li.appendChild(h5)
      div.appendChild(li)
      breweryContent.appendChild(div)
      
   }
}

function removeBreweryList(){
   breweryContent.innerHTML = ""
}




   

/*------------------EVENT HANDLERS------------------*/
//this takes in an event (because the event listener below calls this function)
function toggleBreweries(e) {
   e.preventDefault()
   // console.log(e)
   if (breweryContent.hasChildNodes()) {
      removeBreweryList()
   } else {
      displayBreweryList()
   }
}


//I want to be able to loop through our breweries and hide the ones that dont match the state that is typed into the input.
// function searchByState(e) {
//    e.preventDefault()
//    const value = e.target.value.toLowerCase()
//    console.log(value)
//    getData.forEach(brewery => {
//       const isVisible = brewery.state.toLowerCase().includes(value)
//       console.log(isVisible)
//    })
// }


/*------------------EVENT LISTENERS------------------*/

document.addEventListener('DOMContentLoaded', () => {
   initializeHomePage(); //loads page with all html content
   fetchandCopyData(); //copy of API data
   allBreweries(); //function with event listener 'click' that shows a list of breweries
   // filterBreweries(); //function that lists breweries based on your search input
})

const allBreweries = () => breweryButton.addEventListener('click', toggleBreweries)


breweryButton.addEventListener('mouseover', (e) => {
   // console.log(e.target)
   e.target.setAttribute('style', 'background-color: #EC994B')
})

breweryButton.addEventListener('mouseout', (e) => {
   e.target.setAttribute('style', 'background-color: #FCF8EC')
})

form.addEventListener('submit', (e) => {
   e.preventDefault()
   handleMyList(e.target.new_brewery.value)
})

function handleMyList(myList) {
    let li = document.createElement('li')
    let h5 = document.createElement('h5')
    let btn = document.createElement('button')
    
    li.textContent = `${myList} `
    h5.textContent = `State: ${state.value}`
    btn.textContent = 'x'

    li.appendChild(h5, btn)
    breweryContent.appendChild(li)
   }

// const filterBreweries = () => searchInput.addEventListener('input', searchByState) // this is going to run anytime we change anything inside the search bar, such as typing.

