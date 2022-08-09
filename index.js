/*
GOAL: 3 Event Listeners:
1. mouseover that changes color of Breweries
2a. click event on breweries to show information
2b. Click event to toggle list of breweries: google "how to use toggle with a click event in javascript"
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
const list = document.querySelectorAll('li')
const submitButton = document.querySelector('#submit-btn')
const searchInput = document.querySelector('#search-input')



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
      // console.log(data)
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

      const li = document.createElement('li')
      li.className = 'list'
      li.innerText = item.name
      li.style.marginTop = "10px";

      const h5 = document.createElement('h5')
      h5.className = 'state-list'
      h5.innerText = `State: ${item.state}`
      
      li.appendChild(h5)
      breweryContent.appendChild(li)
   }
}

function removeBreweryList(){
   breweryContent.innerHTML = ""
}



//3. Function that filters by state
/* Example:
function handleBrewries(e) {
  let letter = e.target
  let filterBreeds = breeds.filter((breed) => {
    return breed[0] === letter;
  });
  console.log(filterBreeds)
  ul.innerHTML = "";
  renderDogBreeds(filterBreeds)
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

// const highligher = (e) => {
//    e.preventDefault();
//    addHighlight();
//    // removeHighlight();
// }
 


/*------------------EVENT LISTENERS------------------*/

document.addEventListener('DOMContentLoaded', () => {
   initializeHomePage(); //loads page with all html content
   breweryList(); //function with event listener 'click' that shows a list of breweries
   fetchandCopyData(); //copy of API data
})

const breweryList = () => breweryButton.addEventListener('click', toggleBreweries)

breweryButton.addEventListener('mouseover', (e) => {
   // console.log(e.target)
   e.target.setAttribute('style', 'background-color: #EC994B')
})

breweryButton.addEventListener('mouseout', (e) => {
   e.target.setAttribute('style', 'background-color: #FCF8EC')
})

searchInput.addEventListener('input', (e) =>{
   const value = e.target.value
   console.log(value)
})





 
//click on list of breweries
//when: DOMContentLoaded
//Cause: Click Event
//Effect: show list of breweries
// fetch('https://api.openbrewerydb.org/breweries')
// .then(resp=>(resp.json()))
// .then(data => data.forEach(element => {
   //    console.log(element)
   //    const brewery = element.name
//    const li = document.createElement('li');
   
//    //create an array of objects instead of fetch.
//    //know concepts and quizzes.
//    //explain your code
//    //

//    li.innerText = brewery
//    mainContainer().append(li)

// }))

//search by state - if a brewery exists in the state submitted, display brewery. If not, show "No breweries found in this state"

// Add JavaScript that:
//  A) on page load, fetches the list of brewries using API url.
//  B) parses the response as JSON
//  C) adds list to the DOM for each 🤔 brewery in the array.