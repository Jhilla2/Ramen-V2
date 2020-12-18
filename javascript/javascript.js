function Warn1() {
	alert ("This is Miso Ramen. Try again!");
}

function redirect() {
 	alert ("Winner winner! Ramen dinner!");
	window.location.href = 'ingredients.html';
}

function Warn2() {
	alert ("This is Shio Ramen. Try again!");
}


// Looks to ensure that an ingredient is checked off 
function check() { 
  var anyUnchecked = false;
  var x, i;

  //Select all elements of type input
  x = document.querySelectorAll("input");

  //loop through all inputs and see if any are unchecked
  for (i = 0; i < x.length; i++) {
    if(x[i].checked === false){
        anyUnchecked = true;
    }
  }

  if (anyUnchecked == false) {
    window.location.href = 'cooking.html';
    alert ("Great choices!")
  } else {
      alert ("You're missing ingredients!");
  }
}


let draft, ready;
function preload() {
  ready = loadImage("https://i.imgur.com/pp695wH.png"); //ramen image unedited
  draft = loadImage("https://i.imgur.com/F2nVkKG.png"); //ramen image with steam
}
function setup() {
  createCanvas(600, 400);
  noCursor();
  cursor("images/windface.png", 20, -10); //modified cursor for fun
  image(ready, 0, 0);
  image(draft, 0, 0);
}
function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}











