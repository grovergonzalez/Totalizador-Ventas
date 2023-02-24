import MostrarImpuesto from "./MostrarImpuesto";
import CalcularPrecioNeto from "./CalcularPrecioNeto";
import CalcularDescuento from "./CalcularDescuento";

const cantItems = document.querySelector("#Cant-Item");
const precioItems = document.querySelector("#Precio-Item");
const codEstados = document.querySelector("#estados")
const form = document.querySelector("#Mostrar-form");
const Cantdiv = document.querySelector("#Cant-div");
const preciodiv = document.querySelector("#Precio-div");
const ImpuestoDiv = document.querySelector("#CantImpuestodiv");
const CalcularPrecioNetodiv = document.querySelector("#CalcularPrecioNeto-div");
const CalcularDescdiv = document.querySelector("#CalcularDescuento-div");

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
  CalcularPrecioNetodiv.innerHTML = "Precio Neto: " + CalcularPrecioNeto(cantItems.value, precioItems.value);
  CalcularDescdiv.innerHTML = "Descuento: " + CalcularDescuento(cantItems.value) + "%";
  ImpuestoDiv.innerHTML = "Impuesto para " +  codEstados.value + " " + "(%" + MostrarImpuesto(Cantimpuesto, codEstados.value) + ")";
});
