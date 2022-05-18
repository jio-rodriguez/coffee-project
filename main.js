"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee row col-6 d-inline-flex m-auto ">';
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<div class="col-3 text-white d-flex m-2 w-20 "><h2>' + coffee.name + '</h2>';
    html += '<p class="m-1 .text-white-50" style="color: grey; font-size: 1.5em">' + coffee.roast + '</p></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesByName(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = searchBar.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesByRoast(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    let addedRoastType = roastTypeInput.value;
    let addedRoastName = roastInput.value
    var filteredCoffees = [];
    let idCount = []
    coffees.forEach(function (coffee) {
        idCount.push(coffee.id)
    })
    let idMax = Math.max(...idCount)
    let addedCoffee = {
        id: idMax + 1,
        name: addedRoastName,
        roast: addedRoastType,
        category: 'all'
    }
    coffees.push(addedCoffee);
    console.log(coffees)
    coffees.forEach(function (coffee) {
        filteredCoffees.push(coffee)
    })
    tbody.innerHTML = renderCoffees(filteredCoffees);


}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', category: 'all'},
    {id: 2, name: 'Half City', roast: 'light', category: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', category: 'all'},
    {id: 4, name: 'City', roast: 'medium', category: 'all'},
    {id: 5, name: 'American', roast: 'medium', category: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', category: 'all'},
    {id: 7, name: 'High', roast: 'dark', category: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', category: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', category: 'all'},
    {id: 10, name: 'European', roast: 'dark', category: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', category: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', category: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', category: 'all'},
    {id: 14, name: 'French', roast: 'dark', category: 'all'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let searchBar = document.querySelector('#search')
let roastTypeInput = document.querySelector("#roast-selection-add")
let roastInput = document.querySelector('#addedCoffee')
let submitCoffee = document.querySelector("#submitForAdd")
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener("change",updateCoffeesByRoast )
searchBar.addEventListener("input", updateCoffeesByName)
submitCoffee.addEventListener("click", addCoffee)

