// --- Lógica del Ejercicio 4 ---
function calcularImpuestoUnitario(valor, porcentaje) {
    let impuesto = valor * (porcentaje / 100);
    return impuesto;
}

export function procesarImpuestos(productos) {
    let impuestoTotal = 0;
    
    for (let i = 0; i < productos.length; i++) {
        let valor = productos[i].valor;
        let porcentaje = productos[i].porcentaje;
        
        let impuesto = calcularImpuestoUnitario(valor, porcentaje);
        impuestoTotal = impuestoTotal + impuesto;
    }
    
    return impuestoTotal;
};
