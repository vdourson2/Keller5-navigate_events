const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const sections = document.querySelectorAll("section");
const liste = document.querySelector("ul");

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const newSquare = document.createElement("div");
  newSquare.className = "displayedsquare " + e.target.classList[1];
  sections[0].appendChild(newSquare);
  const newLiLog = document.createElement("li");
  const newLog = document.createTextNode(getElapsedTime() + " Created a new " + e.target.classList[1] + " square");
  liste.appendChild(newLiLog);
  newLiLog.appendChild(newLog);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

/*Lors de l'évènement "cliquer sur le carré vert",
//création d'une div de classes "displayedsquare" et "green"
//et ajout de cette div dans la première section
actionSquares[0].addEventListener('click', apparaitreVert)
function apparaitreVert(){
  const newSquareGreen = document.createElement("div");
  newSquareGreen.className = "displayedsquare green";
  sections[0].appendChild(newSquareGreen);
  const newLog = document.createElement("li");
}

//Lors de l'évènement "cliquer sur le carré violet",
//création d'une div de classes "displayedsquare" et "violet"
//et ajout de cette div dans la première section
actionSquares[1].addEventListener('click', apparaitreViolet)
function apparaitreViolet(){
  const newSquareViolet = document.createElement("div");
  newSquareViolet.className = "displayedsquare violet";
  sections[0].appendChild(newSquareViolet);
}

//Lors de l'évènement "cliquer sur le carré orange",
//création d'une div de classes "displayedsquare" et "orange"
//et ajout de cette div dans la première section
actionSquares[2].addEventListener('click', apparaitreOrange)
function apparaitreOrange(){
  const newSquareOrange = document.createElement("div");
  newSquareOrange.className = "displayedsquare orange";
  sections[0].appendChild(newSquareOrange);
}*/