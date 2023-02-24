import CalcularDescuento from "./CalcularDescuento";
import MostrarImpuesto from "./MostrarImpuesto";

function CalcularTotal(cantItems, precioItems, codEstados, Estados){
    var impuesto = MostrarImpuesto(Estados, codEstados) / 100;
    var descuento = CalcularDescuento(cantItems) / 100;

    var precioNeto = cantItems * precioItems;
    var PrecioConImpuesto = (precioNeto * impuesto) + precioNeto;
    var precioTotal =  PrecioConImpuesto - (PrecioConImpuesto * descuento) ;
    return precioTotal;
}

export default CalcularTotal;