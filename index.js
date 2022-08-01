/*------------------VARIABLES------------------*/
const mainContainer = () => document.getElementById('main-heading')
const h1 = document.createElement('h1')
const p = document.createElement('p')

/*------------------NODES------------------*/
const breweryButton = () => document.getElementById('list-btn')

// const searchBar = document.querySelector('.search-bar')
// const searchOutput = document.querySelector('.output')



/*------------------FUNCTIONS------------------*/

//function that when the page opens, it has all the html needed on the homepage.
function initialize() {
   //create the html elements for the home page

   h1.innerHTML = 'Brewery Bound'   
   p.innerHTML = 'Journey with us across the United States and check out our favorite small and independent breweries.'
   mainContainer().append(h1,p)

}

/*------------------EVENT HANDLERS------------------*/
//this takes in an event (because the event listener below calls this funciton)
const renderList = (event) => {
   event.preventDefault();
   alert('hi')
}



/*------------------EVENT LISTENERS------------------*/

document.addEventListener('DOMContentLoaded', () => {
   initialize();
   breweryList();

})

const breweryList = () => breweryButton().addEventListener('click', renderList)


//1. mouseover that changes color of buttons

//2. click event on the buttons

//3. submit event to search by state

//click on list of breweries
//when: DOMContentLoaded
//Cause: Click Event
//Effect: show list of breweries


//search by state - if a brewery exists in the state submitted, display brewery. If not, show "No breweries found in this state"

// Add JavaScript that:
//  A) on page load, fetches the list of brewries using API url.
//  B) parses the response as JSON
//  C) adds list to the DOM for each 🤔 brewery in the array.


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