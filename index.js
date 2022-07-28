const mainContainer = () => document.getElementById('main')

// Add JavaScript that:
//  A) on page load, fetches the list of brewries using API url.
//  B) parses the response as JSON
//  C) adds list to the DOM for each 🤔 brewery in the array.
fetch('https://api.openbrewerydb.org/breweries')
.then(resp=>(resp.json()))
.then(data => data.forEach(element => {
   // console.log(element.name)
   const brewery = element.name
   const li = document.createElement('li');
   
   li.innerText = brewery
   mainContainer().append(li)

   
}))

/*
Overall Idea
   Load the page and view the homepage

   When: DOMContentLoaded (Event)

   Cause: DOMContentLoaded (Event)

   Effect: Display the Homepage

*/
// const mainContainer = () => document.getElementById('main')

function renderHomePage() {
   //create the html elements for the home page
   const h1 = document.createElement('h1')
   const p = document.createElement('p')
   
   p.innerHTML = 'Journy with us across the United States and check out our favorite small and independent breweries and learn about cities and businesses that support them.'

   mainContainer().append(h1, p)
}

document.addEventListener('DOMContentLoaded', () => {
   renderHomePage();
})