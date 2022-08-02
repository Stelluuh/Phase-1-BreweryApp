/*------------------VARIABLES------------------*/
const h1 = document.createElement('h1')
const p = document.createElement('p')
const getData = [] //copy of API data

/*------------------NODES------------------*/
const mainHeader = document.querySelector('#main-heading')
const breweryButton = document.querySelector('#list-btn')
const breweryContent = document.querySelector('.content')


/*------------------FUNCTIONS------------------*/

//1. function that when the page opens, it has all the html needed on the homepage.
function initializeHomePage() {
   h1.innerHTML = 'Brewery Bound'   
   p.innerHTML = 'Journey with us across the United States and check out our favorite small and independent breweries.'

   p.style.margintTop = "10px"
   p.style.marginBottom = "10px"

   mainHeader.append(h1,p)
}

//2. create a copy of the API data
function fetchandCopyData() {
   fetch('https://api.openbrewerydb.org/breweries')
   .then(resp=>(resp.json()))
   .then(data => {
      // console.log(data)
      data.map(element => getData.push(element))
   })
}

//3. function that adds event listener to li (each brewery name)
   


   //create an array of objects instead of fetch = under variables = getData
   //know concepts and quizzes.
   //explain your code

 
   

/*------------------EVENT HANDLERS------------------*/
//this takes in an event (because the event listener below calls this function)
const renderList = (e) => {
   e.preventDefault();
   // console.log(e)
   for(let item of getData) {
      console.log('item.name: ', item.name)
      const li = document.createElement('li')
      li.innerText = item.name
      li.style.marginTop = "10px";
      breweryContent.appendChild(li)
   }
   
   // getData.forEach(element => )
   
}



/*------------------EVENT LISTENERS------------------*/

document.addEventListener('DOMContentLoaded', () => {
   initializeHomePage(); //loads page with all html content
   breweryList(); //function with event listener 'click'
   fetchandCopyData(); //copy of API data
})

const breweryList = () => breweryButton.addEventListener('click', renderList)




//1. mouseover that changes color of buttons

//2. click event on the buttons

//3. submit event to search by state
 
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


