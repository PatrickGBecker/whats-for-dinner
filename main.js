var cookPot = document.querySelector('.cook-pot');
var loading = document.querySelector('.loading');
var currentDish = document.querySelector('.current-dish');
var clearButton = document.querySelector('.clear-button');
var randomDish = document.querySelector('.random-dish');
var letsCookButton = document.querySelector('.cook-button');
var input = document.querySelectorAll(`input [name = 'course']`);

//Randomizer:
function random(array) {
    return Math.floor(Math.random() * array.length);
};

//Event listeners:
clearButton.addEventListener('click', returnCookPot);

letsCookButton.addEventListener('click', function() {
    event.preventDefault()
    makeRandomDish()
});
//Functions:
functions createRandomDish() {
        var course;
        for (var i = 0; i < input.length; i++) {
            if (input[i].value === 'entire-meal') {
              uncheckButton(input[i]);
              entireMeal();
              loadAnimation();
          }  else {
              loadAnimation();
              uncheckButton(input[i]);
              course = eval(input[i].value);
              currentDish.innerHTML = course[random(course)];
          }
        }

}
