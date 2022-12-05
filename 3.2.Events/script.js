const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const sections = document.querySelectorAll("section");
const liste = document.querySelector("ul");

const clickOnDisplayedSquare = (el) => {
  alert("The color is " + el.target.classList[1]);
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  //créer une nouvelle div carrée de la même couleur que celle du
  //carré sur lequel on a cliqué
  const newSquare = document.createElement("div");
  newSquare.className = "displayedsquare " + e.target.classList[1];
  //ajouter l'évênement "afficher une alerte couleur quand on clique dessus"
  //au moment où le carré est créé
  newSquare.addEventListener('click', clickOnDisplayedSquare);
  //console.log(newSquare);
  sections[0].appendChild(newSquare);
  //Ajouter l'évènement dans la liste des log
  const newLiLog = document.createElement("li");
  const newLog = document.createTextNode(getElapsedTime() + " Created a new " + e.target.classList[1] + " square");
  liste.appendChild(newLiLog);
  newLiLog.appendChild(newLog);
}

const actionSquares = document.querySelectorAll('.actionsquare')
//console.log (actionSquares)
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
    //supprimer les log
    while (liste.children.length >0){
      liste.removeChild(liste.lastElementChild);
    }
  }
  //Quand la touche S est enfoncée
  if (ev.key == "s"){
    //supprimer les carrés créés précédemment
    while (sections[0].children.length>0){
      sections[0].removeChild(sections[0].lastElementChild);
    }
  }
}

document.body.addEventListener('keydown',evenem);