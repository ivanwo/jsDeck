// SETUP FOR CARD GAME, FIND ALL CARDS
let fronts = document.getElementsByClassName("front");
let backs = document.getElementsByClassName("back");

// ASSIGN EVENTLISTENERS TO CARD FRONTS AND FLIP CARDS
for (let i = 0; i < fronts.length; i++) {
  backs[i].style.transform = "rotateY(90deg)";
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
