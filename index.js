
function hideSearch_dialoag() {
  
  document.getElementById('search_dialoag').style.display = 'none'
  
}
function toggleSearchDialog(mood) {
  
  const sell = document.getElementById('sell')
  const rent = document.getElementById('rent')
if (mood == "sell") {
  rent.style.background='white'
  rent.style.color='black'
  sell.style.background = '#6f10a2'
  sell.style.color='white'
  document.getElementById('search_dialoag').style.display = 'flex'
}else{
  sell.style.background='white'
  sell.style.color='black'
  rent.style.background = '#6f10a2'
  rent.style.color='white'
  document.getElementById('search_dialoag').style.display = 'flex'
}
  
}

function makeCall(phoneNum) {
  window.open(`tel:${phoneNum}`)
  
}


function toggleMenuSM() {
  const menuSm =document.getElementById('menuSm')
  .classList.toggle("hidden");
  
}


function toggleDropdown(container) {
  const dropdownContainer = document.querySelector(container);
  dropdownContainer.classList.toggle("hidden");
}


// ________________Nav bar end________________________



function loadComponent(path,container) {
  fetch(path) // Replace 'path/to/header.html' with the actual path to your header component
    .then(response => response.text())
    .then(data => {
      let divContainer = document.getElementById(container);
      
      divContainer.innerHTML = data;
    })
    .catch(error => console.error('Error loading header component:', error));

}