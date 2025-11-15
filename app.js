//primer ejecicio taller 

// notas dadas
let notas = [4.5, 3.2, 4.0];

//  sumar las notas
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
    console.log("Voy en nota " + (i+1) + ", suma actual: " + suma);
}

// calcular promedio
let promedio = suma / notas.length;
console.log("Promedio: " + promedio);

// determinar rendimiento
let rendimiento = "";
if (promedio >= 4.0) {
    rendimiento = "Alto";
} else if (promedio >= 3.0) {
    rendimiento = "Medio";
} else {
    rendimiento = "Bajo";
}
console.log("Rendimiento: " + rendimiento);

