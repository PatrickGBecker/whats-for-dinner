var cookPot = document.querySelector('.cook-pot');
var loading = document.querySelector('.loading');
var currentDish = document.querySelector('.current-dish');
var clearButton = document.querySelector('.clear-button');
var randomDish = document.querySelector('.random-dish');
var letsCookButton = document.querySelector('.cook-button');
var input = document.querySelectorAll(`input [name = 'course']`);


function random(array) {
    return Math.floor(Math.random() * array.length);
};


clearButton.addEventListener('click', returnCookPot);

letsCookButton.addEventListener('click', function() {
    event.preventDefault()
    makeRandomDish()
});
