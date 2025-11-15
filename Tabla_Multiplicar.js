// --- Lógica del Ejercicio 3 ---
export function generarTabla(numero) {
    let tabla = [];
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla[i - 1] = numero + " x " + i + " = " + resultado;
    }
    
    return tabla;
};