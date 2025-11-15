// --- Lógica del Ejercicio 5: Buscar un Elemento ---


// La función busca un 'elemento' específico dentro de una 'lista'.
// Devuelve 'true' (verdadero) si lo encuentra, y 'false' (falso) si no.
export function buscarElemento(lista, elemento) {
    // Creamos una "bandera" o interruptor. Por defecto, asumimos que no hemos encontrado el elemento.
    let encontrado = false;
    
    // Usamos un bucle 'for' para revisar cada ítem de la 'lista', uno por uno.
    for (let i = 0; i < lista.length; i++) {
        // En cada vuelta, comparamos el ítem actual de la lista (lista[i]) con el 'elemento' que estamos buscando.
        if (lista[i] === elemento) {
            // ¡Lo encontramos! Si son iguales, cambiamos nuestra bandera a 'true'.
            encontrado = true;
            
            // 'break' es una instrucción para detener el bucle inmediatamente.
            // Como ya encontramos lo que buscábamos, no tiene sentido seguir revisando el resto de la lista.
            // Esto hace que el código sea más eficiente.
            break; 
        }
    }
    
    // Después de que el bucle termina (ya sea porque revisó toda la lista o porque se detuvo con 'break'),
    // la función devuelve el valor de nuestra bandera 'encontrado'.
    // Será 'true' si lo encontró, o 'false' si el bucle terminó y nunca lo encontró.
    return encontrado;
};
