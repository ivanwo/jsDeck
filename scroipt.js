// SETUP FOR CARD GAME, FIND ALL CARDS
let fronts = document.getElementsByClassName("front");
let backs = document.getElementsByClassName("back");
// true for front false for back
let facing = [];
// deck content array,
// 0 = ★
// 1 = ☾
// 2 = ⌇
// 3 = ■
// 4 = ○
// 5 = +
let deck = [0, 1, 2, 3, 4, 5];
// psychic goal variable
let goal = Math.floor(Math.random() * 6);

function dex(neb) {
  switch (neb) {
    case 0:
      return `★`;
    case 1:
      return `☾`;
    case 2:
      return `⌇`;
    case 3:
      return `■`;
    case 4:
      return `○`;
    case 5:
      return `+`;
    case `★`:
      return 0;
    case `☾`:
      return 1;
    case `⌇`:
      return 2;
    case `■`:
      return 3;
    case `○`:
      return 4;
    case `+`:
      return 5;
    default:
      return `f`;
  }
}

shuffler(deck);
// ASSIGN EVENTLISTENERS TO CARD FRONTS AND FLIP CARDS
for (let i = 0; i < fronts.length; i++) {
  backs[i].style.transform = "rotateY(90deg)";
  facing.push(false);
  if (deck[i] === goal) document.getElementById("res").innerHTML = "success";
  fronts[i].innerHTML = dex(deck[i]);
  fronts[i].addEventListener("click", _ => {
    fronts[i].style.transition = "transform 0.5s";
    fronts[i].style.transform = "rotateY(-90deg)";
    setTimeout(function() {
      backs[i].style.transition = "transform 0.5s";
      backs[i].style.transform = "rotateY(0deg)";
    }, 500);
  });
}

// ASSIGN EVENTLISTENERS TO CARD BACKS
for (let i = 0; i < backs.length; i++) {
  backs[i].addEventListener("click", _ => {
    backs[i].style.transition = "transform 0.5s";
    backs[i].style.transform = "rotateY(-90deg)";
    setTimeout(function() {
      fronts[i].style.transition = "transform 0.5s";
      fronts[i].style.transform = "rotateY(0deg)";
    }, 500);
  });
}

document.getElementById("sym").addEventListener("click", _ => {
  gameOn();
});
function gameOn() {
  goal = Math.floor(Math.random() * 6);
  document.getElementById("sym").innerHTML = dex(goal);
  shuffler(deck);
  reset();
}
function shuffler(neb) {
  neb.sort(_ => Math.random() - 0.5);
}
function reset() {
  for (let i = 0; i < deck.length; i++) {
    backs[i].style.transform = "rotateY(-90deg)";
    fronts[i].style.transform = "rotateY(0deg)";

    fronts[i].innerHTML = dex(deck[i]);
  }
  document.getElementById("res").innerHTML = "";
}

// GAME BIT
gameOn();
