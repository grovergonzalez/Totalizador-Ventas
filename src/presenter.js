
const cantItems = document.querySelector("#Cant-Item");
const precioItems = document.querySelector("#Precio-Item");
const codEstados = document.querySelector("#estados")
const form = document.querySelector("#Mostrar-form");
const Cantdiv = document.querySelector("#Cant-div");
const preciodiv = document.querySelector("#Precio-div");
const codEstadosDiv = document.querySelector("#CodEstados-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  Cantdiv.innerHTML = "Cantidad de Items: " + cantItems.value ;
  preciodiv.innerHTML = "Precio por Item: " + precioItems.value;
  codEstadosDiv.innerHTML = "Codigo de Estado: " + codEstados.value;
});
