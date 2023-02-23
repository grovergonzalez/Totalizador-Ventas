
const cantItems = document.querySelector("#Cant-Item");
const form = document.querySelector("#Mostrar-form");
const div = document.querySelector("#Total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "Cantidad de Items: " + cantItems.value ;
});
