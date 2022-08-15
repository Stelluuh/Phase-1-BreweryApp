# Idea
 I want an application that allows us me to select a state that lists all the breweries available in that state. I want to be able to add a function that likes the brewery and with each like will bring it to a section that shows all your favorite breweries.

# Features
* Brewery API: https://api.openbrewerydb.org/breweries (fetch)
* Search by typing Brewery Name or Search by State (DOMContentLoaded, Submit Form)
* Hover over buttons to show contact information (mouseover)
* Add to favorites (Click - button)
* Add notes on breweries (Submit - form)

# MVP - Minimum Viable Product 
* Button that lists all breweries by name(DOMContentLoaded, 'click')
* Add a filter to choose by state (.filter instead of .find, 'submit')
* Hover over Breweries to show brewery info ('mouseover')




# Extra
* Create a randomizer that chooses a brewery for you to try

# Events
3 question rule:

- Overall: Be able to click on the button and list the breweries to the page.

- When: On page load (aka: DOMContentLoaded)

- Cause: Click Event

- Effect: Change the header to brewery list and list out the meals inside of an unordered list as (li)'s

-----------------------------

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
   

//    li.innerText = brewery
//    mainContainer().append(li)

// }))

//search by state - if a brewery exists in the state submitted, display brewery. If not, show "No breweries found in this state"

// Add JavaScript that:
//  A) on page load, fetches the list of brewries using API url.
//  B) parses the response as JSON
//  C) adds list to the DOM for each 🤔 brewery in the array.


//create an array of objects instead of fetch.
//know concepts and quizzes.
//explain your code


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