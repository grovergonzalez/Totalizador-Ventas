import MostrarImpuesto from "./MostrarImpuesto";
import CalcularPrecioNeto from "./CalcularPrecioNeto";

const cantItems = document.querySelector("#Cant-Item");
const precioItems = document.querySelector("#Precio-Item");
const codEstados = document.querySelector("#estados")
const form = document.querySelector("#Mostrar-form");
const Cantdiv = document.querySelector("#Cant-div");
const preciodiv = document.querySelector("#Precio-div");
const codEstadosDiv = document.querySelector("#CodEstados-div");
const ImpuestoDiv = document.querySelector("#CantImpuestodiv");
const CalcularPrecioNetodiv = document.querySelector("#CalcularPrecioNeto-div");

const Cantimpuesto = new Map([
  ['UT', 6.65],
  ['NV', 8],
  ['TX', 6.25],
  ['AL', 4],
  ['CA', 8.25]
]);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  Cantdiv.innerHTML = "Cantidad de Items: " + cantItems.value ;
  preciodiv.innerHTML = "Precio por Item: " + precioItems.value;
  codEstadosDiv.innerHTML = "Codigo de Estado: " + codEstados.value;
  ImpuestoDiv.innerHTML = "Impuesto para " + codEstados.value + " " + MostrarImpuesto(Cantimpuesto, codEstados.value) + "%";
  CalcularPrecioNetodiv.innerHTML = "Precio Neto: " + CalcularPrecioNeto(cantItems.value, precioItems.value);
});
