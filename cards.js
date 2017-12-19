let cardName = document.getElementById("input");
let createBtn = document.getElementById("createBtn");
let card = document.createElement("div");

createBtn.addEventListener("click", createNewCard) 

function createNewCard() {
  card.className = "newCard";
  let cardHead = document.createElement("h3");
    cardHead.innerHTML = cardName.value;
    card.appendChild(cardHead);
  let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "deleteBtn";
    card.appendChild(deleteBtn);
  document.body.append(card);
  deleteBtn.addEventListener("click", function() {
    card.parentNode.removeChild(card);
  });

}
 


