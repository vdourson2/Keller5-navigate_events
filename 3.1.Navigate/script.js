//Select the last child of the <ol> tag and put it at the beginning of the list
const liste = document.querySelector("ol");
liste.insertBefore(liste.lastElementChild,liste.firstElementChild);

//Move the <h2> of the third section in the second one and vice-versa
const sections = document.querySelectorAll("section");
const t2 = sections[1].firstElementChild;
const t3 = sections[2].firstElementChild.firstElementChild;
sections[1].insertBefore(t3,t2);
const p = sections[2].firstElementChild.firstElementChild;
sections[2].firstElementChild.insertBefore(t2,p);

//Delete the last section from the DOM
const suppression = document.querySelector("footer");
document.body.removeChild(suppression);
