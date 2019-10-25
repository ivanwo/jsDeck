let dib = document.getElementById("dib");
let para = document.getElementById("para");
let par2 = document.getElementById("par2");
let clock = document.getElementById("clock");

para.addEventListener("click", _ => {
  para.style.display = "none";
});

let i = 0;
dib.addEventListener("click", event => {
  if (i === 0) {
    dib.style.backgroundColor = "lightgrey";
    i++;
  } else {
    dib.style.backgroundColor = "grey";
    i--;
  }
});

par2.addEventListener("mouseover", event => {
  par2.innerHTML = "Hi";
});
par2.addEventListener("mouseout", event => {
  par2.innerHTML = "Bye";
});

let d = new Date();
clock.innerHTML = `current time: ${d.toString().substr(15, 10)}`;

setInterval(function() {
  d = new Date();
  clock.innerHTML = `current time: ${d.toString().substr(15, 10)}`;
}, 1000);
