
/*------------------CREATE VARIABLES------------------*/
// alert('It works!')
let allBreweries = [] 
console.log(allBreweries)


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
   initializeHomePage();
   fetchandCopyData();
})

allButtons.forEach(button => button.addEventListener('mouseover', (e) => {
   e.target.setAttribute('style', 'background-color: #EC994B')
})) 

allButtons.forEach(button => button.addEventListener('mouseout', (e) => {
   e.target.setAttribute('style', 'background-color: #FCF8EC')
}))

breweryButton.addEventListener('click', () => breweryContent.hasChildNodes() ? removeBreweryList() : displayBreweryList())

form.addEventListener('submit', (e) => {
   e.preventDefault()
   let textValue = e.target.new_brewery.value
   createNewCard(textValue)
   form.reset()
});


/*------------------FUNCTIONS ------------------*/

const initializeHomePage = () => {
   const h1 = document.createElement('h1')
   const h4 = document.createElement('h4')
   
   h1.innerText = 'Brewery Bound'
   h4.innerText = 'Journey with us across the United States and check out our favorite small and independent breweries.'
   h1.style.marginBottom = "25px"
   h4.style.marginBottom = "25px"

   topContainer.append(h1, h4)
   
   bottomContainer.style.display = 'none'
}

const fetchandCopyData = () => {
   fetch('https://api.openbrewerydb.org/breweries')
      .then(resp => (resp.json()))
      .then(data => {
         data.map(element => allBreweries.push({ 
            name: element.name,
            state: element.state
            })
         )
      })
}


const displayBreweryList = () => {
   for (let brewery of allBreweries) {
      const card = document.createElement('div')
      const li = document.createElement('li')
      li.innerText = brewery.name
      
      const h5 = document.createElement('h5')
      h5.innerText = `State: ${brewery.state}`

      li.appendChild(h5)
      card.appendChild(li)
      breweryContent.appendChild(card)

      bottomContainer.style.display = 'block' 
      breweryButton.innerText = "Hide Breweries"
   }
}

const removeBreweryList = () => {
   breweryContent.innerHTML = ""
   bottomContainer.style.display = 'none' 
   breweryButton.innerText = "Show Breweries"
}

const createNewCard = (addBrewery) => {  
   let li = document.createElement('li')
   let h5 = document.createElement('h5')
   let div = document.createElement('div')
   li.textContent = addBrewery
   h5.textContent = `State: ${state.value}`

   li.appendChild(h5)
   div.appendChild(li)

   breweryContent.appendChild(div)

   let newCard = {
      name: addBrewery,
      state: state.value
   }
   allBreweries.push(newCard)
  
}


