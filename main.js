"use strict!"
var recipeString = '';
var i = 0;
var newRound = 1;
var level = 0;
var scor = 0;
var lives  = 5;
var nrIngr = 3;
const hotSet = new Set (["bread", "sausage", "ketchup", "onion", "coleslaw"]);
const tiramisuSet = new Set (["mascarpone", "coffee", "eggs", "sugar", "ladyfingers", "vanilla", "cacao", "salt"]);
const burgerSet = new Set(["meat", "salt", "bun", "buns", "onion", "tomatoes", "cucumber", "pickles", "ketchup", "mayonnaise", "lettuce"]);
const guacamoleSet = new Set (["avocado", "onion", "tomatoes", "cilantro", "jalapeño", "jalapeno", "garlic", "lime", "lemon", "salt"]);
const quesadillaSet = new Set(["olive oil", "oil", "bell peppers", "onion", "salt", "pepper", "chicken", "chili", "tortillas", "cheese", "avocado", "tomatoes", "corn"]);
const creamsoupSet = new Set (["chicken", "pepper", "butter", "garlic", "mushrooms", "onion", "carrot", "carrots", "flour", "chicken stock"]);
const icecreamSet = new Set (["cream", "heavy cream", "milk", "sugar", "vanilla"]);
const setPanc = new Set(["milk", "sugar", "flour", "eggs", "baking powder", "oil", "vanilla"]);
const setGrSalad = new Set(["olives", "tomatoes", "salad", "feta", "cucumber", "olive oil", "bell peppers", "oregano"]);
const setCake = new Set( ["milk", "sugar", "flour", "eggs", "baking powder", "oil", "vanilla", "cream"]);
const setMilk = new Set (["milk", "ice cream", "topping", "vanilla"]);
var recipes = new Map([
  ["Hot Dog", hotSet],
  ["Tiramisu", tiramisuSet],
  ["Burger", burgerSet],
  ["Guacamole", guacamoleSet],
  ["Quesadilla", quesadillaSet],
  ["Chicken And Mushrooms Cream Soup", creamsoupSet],
  ["Ice Cream", icecreamSet],
  ["Pancake", setPanc],
  ["GreekSalad", setGrSalad],
  ["Cake", setCake],
  ["Milkshake", setMilk]
]);


addRecipe();

function addIngredient() {

  if (document.getElementById('ingredientInput').value) {
    i++;
    var title = document.getElementById('ingredientInput').value;
    var node = document.createElement('div');
    var icon = '';
    if (recipes.get(recipeString).has(title)) {
        icon = '<i class="fas fa-check" style="color:green"></i>';
    } else {
        icon = '<i class="fas fa-times" style="color:red"></i>';
    }
    node.innerHTML = '<label id="label' + i + '">' + title + '</label>' + icon;
    document.getElementById('ingredients').appendChild(node);
  }
}

function addIngredientV() {
  annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
    if (userSaid) {
      var title = userSaid;
      var duplicate = false;
      var node = document.createElement('div');
      var icon = '';
      var corect = false;
      if (recipes.get(recipeString).has(title)) {
        icon = '<i class="fas fa-check" style="color:green"></i>';
        corect = true;

      } else {
        icon = '<i class="fas fa-times" style="color:red"></i>';
      }
      node.innerHTML = '<label id="label' + i + '">' + title + '</label>' + icon;

      for (let j = 0; j < i; j++) {
        if (document.getElementById('label' + j)) {
          if (document.getElementById('label' + j).textContent === title) {
            duplicate = true;
          }
        }
      }
      if (!duplicate) {
        document.getElementById('ingredients').appendChild(node);
        if (corect){
          scor += 150;
        } else {
          lives--;
        }
        i++;
        resetValues();
        if (lives == 0){
          setTimeout(gameOver, 2000);
        }
      }
      if (i >= nrIngr){
        newRound = 1;
        setTimeout(clearFunc,2000);
        nrIngr = level + 3;
        level = Math.floor(scor/500);
        resetValues();
      }
    }
  });

}

function resetValues(){
  document.getElementById("score").innerText = scor;
  document.getElementById("lives").innerText = lives;
  document.getElementById("level").innerText = level;
  document.getElementById("nrIngr").innerText = nrIngr;
}

function gameOver(){
  window.location.href = "gameOver.html";
}

function addRecipe() {
  // daca exista o reteta pe ecran, dar au fost introduse ingredintele necesare
  if (document.getElementById("recipe") && i === 0) {
    var element = document.getElementById("recipe");
    element.parentNode.removeChild(element);
  }
  if (i === 0){
    recipeString = getRandomKey(recipes);
    var node = document.createElement('div');
    node.innerHTML = '<label id="recipe' + '">' + recipeString + '</label>';
    document.getElementById('recipes').appendChild(node);
  }
}


function getRandomKey(collection) {
  let index = Math.floor(Math.random() * collection.size);
  let cntr = 0;
  for (let key of collection.keys()) {
    if (cntr++ === index) {
      return key;
    }
  }
}


var commands = {
  'milk': addIngredientV,
  'sugar': addIngredientV,
  'flour': addIngredientV,
  'eggs': addIngredientV,
  'baking powder': addIngredientV,
  'oil': addIngredientV,
  'vanilla': addIngredientV,
  'olives': addIngredientV,
  'tomatoes': addIngredientV,
  'salad': addIngredientV,
  'feta': addIngredientV,
  'cucumber': addIngredientV,
  'olive oil': addIngredientV,
  'bell peppers': addIngredientV,
  'oregano': addIngredientV,
  'cream': addIngredientV,
  'vodka': addIngredientV,
  'water': addIngredientV,
  'juice': addIngredientV,
  'ice cream': addIngredientV,
  'topping': addIngredientV,
  "bread" : addIngredientV,
  "sausage": addIngredientV,
  "ketchup": addIngredientV,
  "coleslaw" : addIngredientV,
  "mascarpone":addIngredientV,
  "coffee" :addIngredientV,
  "ladyfingers" : addIngredientV,
  "cacao" : addIngredientV,
  "avocado": addIngredientV,
  "onion" : addIngredientV, 
  "cilantro": addIngredientV,
  "jalapeño": addIngredientV, 
  "jalapeno": addIngredientV,
  "garlic": addIngredientV, 
  "lime" : addIngredientV, 
  "lemon" : addIngredientV, 
  "salt" : addIngredientV,
  "chicken" : addIngredientV, 
  "chili" : addIngredientV, 
  "tortillas" : addIngredientV, 
  "cheese" : addIngredientV, 
  "corn" : addIngredientV,
  "butter" :  addIngredientV,
  "garlic" : addIngredientV, 
  "mushrooms" : addIngredientV, 
  "carrot" : addIngredientV, 
  "carrots": addIngredientV, 
  "flour" : addIngredientV,
  "chicken stock" : addIngredientV,
  "heavy cream" : addIngredientV
};

function speak() {
  console.log("speak() - start");
  SpeechKITT.annyang();

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');

  // Render KITT's interface
  SpeechKITT.vroom();
  annyang.addCommands(commands);
  annyang.start();
  annyang.debug([newState = true]);
  annyang.addCallback('resultNoMatch', function (phrases) {
      console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
      var title;
      if (i === 0)
        title = " " + phrases[0];
      else 
        title = phrases[0];
      var duplicate = false;
      var node = document.createElement('div');
      var icon = '';
      icon = '<i class="fas fa-times" style="color:red"></i>';
      node.innerHTML = '<label id="label' + i + '">' + title + '</label>' + icon;
      
      for (let j = 0; j <= i; j++) {
        if (document.getElementById('label' + j)) {

          if (document.getElementById('label' + j).textContent === title) {
            duplicate = true;
            break;
          }
        }
      }

      if (!duplicate) {
        document.getElementById('ingredients').appendChild(node);
        lives--;
        i = i + 1;
        resetValues();
        if (lives == 0){
          setTimeout(gameOver, 2000);
        }
      }

      if (i >= nrIngr){
        setTimeout(clearFunc,2000);
        newRound = 1;
        nrIngr = level + 3;
        level = Math.floor(scor/500);
        resetValues();
      }
      console.log("speak() - end");
  });

}
function clearFunc(){
  document.getElementById("ingredients").innerText  = '';
  i = 0;
  addRecipe();
}

function animationFunc(number){
  document.getElementsByClassName("page1")[0].style.visibility = "hidden";
  document.getElementsByClassName("page2")[0].style.visibility = "visible";
  if (number === 0){
    document.getElementsByClassName("altImage")[0].src = "https://pmcvariety.files.wordpress.com/2018/03/hells-kitchen-gordon-ramsay.png?w=888";
    document.getElementById("quote").innerText = "You guys cook like old people fuck.";
    document.getElementById("quoteFooter").innerText = "Gordon Ramsay";
  } else if (number === 1){
    document.getElementsByClassName("altImage")[0].src = "http://www.fnstatic.co.uk/images/content/chef/jamie-oliver.jpg    ";
    document.getElementById("quote").innerText = "I like ties but I prefer not to wear one when I'm nervous.";
    document.getElementById("quoteFooter").innerText = "Jamie Oliver";
  } else {
    document.getElementsByClassName("altImage")[0].src = "https://vignette.wikia.nocookie.net/reddwarf/images/6/69/Ainsley_Harriott.jpg/revision/latest?cb=20180223100130";
    document.getElementById("quote").innerText = "Give that meat a good ol' rub.";
    document.getElementById("quoteFooter").innerText = "Ainsley Harriott";
  }
  resetValues();
}

