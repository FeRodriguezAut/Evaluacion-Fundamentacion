// --- Lógica del Ejercicio 4: Calcular Impuestos ---


// Su única tarea es calcular el impuesto para UN solo producto.
// Recibe el valor del producto y el porcentaje de impuesto a aplicar.
function calcularImpuestoUnitario(valor, porcentaje) {
    // Para calcular el impuesto, multiplicamos el valor por el porcentaje dividido entre 100.
    // Por ejemplo, si el valor es 1000 y el porcentaje es 19, el cálculo es 1000 * (19 / 100) = 190.
    let impuesto = valor * (porcentaje / 100);
    // La función devuelve el monto del impuesto calculado.
    return impuesto;
}

// 'export' permite que esta función principal sea usada en otros archivos (como app.js).
// Esta función procesa una lista completa de productos y suma todos sus impuestos.
export function procesarImpuestos(productos) {
    // Creamos una caja (variable) para ir acumulando el total de los impuestos. Empezamos en 0.
    let impuestoTotal = 0;
    
    // Usamos un bucle 'for' para recorrer la lista de 'productos' uno por uno.
    for (let i = 0; i < productos.length; i++) {
        // En cada vuelta, sacamos el valor y el porcentaje del producto actual.
        // 'productos[i]' es el producto en la posición actual del recorrido.
        let valor = productos[i].valor;
        let porcentaje = productos[i].porcentaje;
        
        // Usamos nuestra función ayudante 'calcularImpuestoUnitario' para obtener el impuesto de este producto.
        let impuestoUnitario = calcularImpuestoUnitario(valor, porcentaje);
        
        // Sumamos el impuesto de este producto a nuestro total acumulado.
        impuestoTotal = impuestoTotal + impuestoUnitario;
    }
    
    // Después de que el bucle recorre todos los productos, 'impuestoTotal' tiene la suma de todos los impuestos.
    // La función devuelve ese total.
    return impuestoTotal;
};