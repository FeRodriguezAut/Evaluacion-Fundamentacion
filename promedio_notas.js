// --- Lógica del Ejercicio 1 ---
export function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
    const promedio = suma / notas.length;
    
    let rendimiento = "";
    if (promedio >= 4.0) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }
    
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}
