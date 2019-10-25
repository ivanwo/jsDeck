let cards = document.getElementsByClassName("card");
let fronts = document.getElementsByClassName("front");
let backs = document.getElementsByClassName("back");

for (let i = 0; i < fronts.length; i++) {
  fronts[i].addEventListener("click", _ => {
    fronts[i].style.transition = "transform 1s";
    fronts[i].style.transform = "rotateY(-90deg)";
    setTimeout(function() {
      backs[i].style.transition = "transform 1s";
      backs[i].style.transform = "rotateY(0deg)";
    }, 1000);
  });
}

for (let i = 0; i < backs.length; i++) {
  backs[i].style.transform = "rotateY(90deg)";
  backs[i].addEventListener("click", _ => {
    backs[i].style.transition = "transform 1s";
    backs[i].style.transform = "rotateY(-90deg)";
    setTimeout(function() {
      fronts[i].style.transition = "transform 1s";
      fronts[i].style.transform = "rotateY(0deg)";
    }, 1000);
  });
}
