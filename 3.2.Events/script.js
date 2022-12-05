const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const sections = document.querySelectorAll("section");
const liste = document.querySelector("ul");

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  //créer une nouvelle div carrée de la même couleur que celle du
  //carré sur lequel on a cliqué
  const newSquare = document.createElement("div");
  newSquare.className = "displayedsquare " + e.target.classList[1];
  sections[0].appendChild(newSquare);
  //Ajouter l'évènement dans la liste des log
  const newLiLog = document.createElement("li");
  const newLog = document.createTextNode(getElapsedTime() + " Created a new " + e.target.classList[1] + " square");
  liste.appendChild(newLiLog);
  newLiLog.appendChild(newLog);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

const evenem = (ev) => {
  //Quand la touche spacebar est enfoncée
  if (ev.key == " "){
    //Générer les paramètres pour une couleur aléatoire et
    //les appliquer au fond du document 
    let r= Math.floor(Math.random() * 256);
    let g= Math.floor(Math.random() * 256);
    let b= Math.floor(Math.random() * 256);
    document.body.style.backgroundColor =`rgb(${r},${g},${b})`;
    //Ajouter l'évènement dans la liste des log
    const newLiLog = document.createElement("li");
    const newLog = document.createTextNode(getElapsedTime() + " spacebar used");
    liste.appendChild(newLiLog);
    newLiLog.appendChild(newLog);
  }
  //Quand la touche I est enfoncée
  if (ev.key == "I"){
    while (liste.children.length >0){
      liste.removeChild(liste.lastElementChild);
    }
  }
  //Quand la touche S est enfoncée
  if (ev.key == "s"){
    while (sections[0].children.length>0){
      sections[0].removeChild(sections[0].lastElementChild);
    }
  }
  console.log(ev.code);
}

document.body.addEventListener('keydown',evenem);




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