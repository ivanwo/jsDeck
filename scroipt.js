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

function dex(neb) {
  if (neb === 0) return `★`;
  else if (neb === 1) return `☾`;
  else if (neb === 2) return `⌇`;
  else if (neb === 3) return `■`;
  else if (neb === 4) return `○`;
  else return `+`;
}

// ASSIGN EVENTLISTENERS TO CARD FRONTS AND FLIP CARDS
for (let i = 0; i < fronts.length; i++) {
  fronts[i].style.transform = "rotateY(90deg)";
  facing.push(false);
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

// GAME BIT
