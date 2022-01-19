const viewWidth = document.body.clientWidth;
const viewHeight = document.body.clientHeight;

function moveDot() {
  const theDot = document.getElementById("dot");
  theDot.remove();

  function getRandomCoord(val) {
    return Math.floor(Math.random() * val) + 1;
  }

  const newXcoord = getRandomCoord(viewWidth);
  const newYcoord = getRandomCoord(viewHeight);

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "dot");
  newDiv.style.position = "fixed";
  newDiv.style.left = newXcoord + "px";
  newDiv.style.top = newYcoord + "px";

  document.body.appendChild(newDiv);

  addTheEvent();
}

function addTheEvent() {
  const theDot = document.getElementById("dot");
  theDot.addEventListener("click", moveDot);
}

addTheEvent();