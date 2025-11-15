// --- Lógica del Ejercicio 3: Generar Tabla de Multiplicar ---

// 'export' permite que esta función se use en otros archivos.


export function generarTabla(numero) {
    // Creamos una "caja" que es una lista vacía. Aquí guardaremos cada línea de la tabla.
    const tabla = [];
    
    // Usamos un bucle 'for' para contar del 1 al 10.
    // La variable 'i' empezará en 1, y en cada vuelta aumentará su valor hasta llegar a 10.
    for (let i = 1; i <= 10; i++) {
        // En cada vuelta, calculamos el resultado de la multiplicación.
        // Por ejemplo, si 'numero' es 5 y 'i' es 2, 'resultado' será 10.
        const resultado = numero * i;
        
        // Creamos el texto de la línea de la tabla.
        // Usamos ` (acento grave) para crear una cadena de texto que puede incluir variables adentro con ${}.
        // Esto crea una línea como "5 x 1 = 5".
        const linea = `${numero} x ${i} = ${resultado}`;
        
        // Agregamos la línea que acabamos de crear a nuestra lista 'tabla'.
        tabla.push(linea);
    }
    
    // Una vez que el bucle ha terminado (ha contado hasta 10), la lista 'tabla' contiene todas las líneas.
    // La función devuelve la lista completa.
    return tabla;
};
