//primer ejecicio taller 

function calcularPromedio(notas) {
    
    let suma = 0;
    
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
    let promedio = suma / notas.length;
    
    let rendimiento = "";
    if (promedio >= 4.0) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }
    
    // Retornar ambos valores
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}

// PRUEBA FINAL
let misNotas = [4.5, 3.8, 4.2, 3.9, 4.0];
let resultado = calcularPromedio(misNotas);
console.log("Promedio: " + resultado.promedio);
console.log("Rendimiento: " + resultado.rendimiento);
