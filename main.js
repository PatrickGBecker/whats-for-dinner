var cookPot = document.querySelector('.cook-pot');
var loading = document.querySelector('.loading');
var currentDish = document.querySelector('.current-dish');
var youShouldMake = document.querySelector('.dish-header');
var clearButton = document.querySelector('.clear-button');
var randomDish = document.querySelector('.random-dish');
var letsCookButton = document.querySelector('.cook-button');
var input = document.querySelectorAll(`input[name='course']`);

//Randomizers:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};
//Event listeners:
clearButton.addEventListener('click', returnCookPot);

letsCookButton.addEventListener('click', function() {
    event.preventDefault()
    createRandomDish()

});
//Functions:
function createRandomDish() {
  var course;
  for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        if (input[i].value === 'entire-meal') {
          uncheckButton(input[i]);
          entireMeal();
          loadAnimation();
      } else {
          loadAnimation();
          uncheckButton(input[i]);
          course = eval(input[i].value);
          currentDish.innerHTML = course[getRandomIndex(course)];
      }
    }
  }
}

function loadAnimation() {
         cookPot.classList.add('animation');
         loading.classList.remove('hidden');
         loading.classList.add('animation2');
         setTimeout(switchPotAndText, 4000);
};

function entireMeal() {
         currentDish.innerHTML = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
};

function returnCookPot() {
         cookPot.classList.remove('hidden');
         randomDish.classList.add('hidden');
         cookPot.classList.remove('animation');
         clearButton.classList.add('hidden');
};

function switchPotAndText() {
         loading.classList.add('hidden');
         cookPot.classList.add('hidden');
         randomDish.classList.remove('hidden');
         clearButton.classList.remove('hidden');
};

function uncheckButton(input) {
        input.checked = false;
};
