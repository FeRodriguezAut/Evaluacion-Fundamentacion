// --- Lógica del Ejercicio: Calcular Promedio de Notas ---

// Esta línea 'export' hace que la función 'calcularPromedio' esté disponible para que otros archivos (como app.js) puedan usarla.
// Una función es como una máquina que recibe algo, hace una tarea y devuelve un resultado.
// Esta función recibe una lista de 'notas' y calcula el promedio.
export function calcularPromedio(notas) {
    // Aquí creamos una "caja" (variable) llamada 'suma' y le ponemos el valor inicial de 0.
    // Usaremos esta caja para ir guardando la suma de todas las notas.
    let suma = 0;

    // Este es un 'bucle' o 'ciclo'. Imagina que tienes la lista de notas y quieres hacer algo con cada una.
    // El bucle 'for' recorre la lista de 'notas' una por una, desde la primera hasta la última.
    // 'i' es un contador que empieza en 0 y aumenta en cada vuelta.
    for (let i = 0; i < notas.length; i++) {
        // En cada vuelta del bucle, tomamos la nota actual y la sumamos a nuestra caja 'suma'.
        // 'notas[i]' es la forma de decir "dame la nota que está en la posición 'i' de la lista".
        // Por ejemplo, en la primera vuelta (i=0), toma la primera nota. En la segunda (i=1), la segunda, y así.
        suma = suma + notas[i];
    }
    
    // Después de que el bucle termina, ya hemos sumado todas las notas. Ahora calculamos el promedio.
    // Dividimos la 'suma' total por la cantidad de notas que hay en la lista ('notas.length').
    // El resultado lo guardamos en una nueva caja (constante) llamada 'promedio'.
    const promedio = suma / notas.length;
    
    // Creamos otra caja llamada 'rendimiento' para guardar un texto que describa cómo fue el desempeño del estudiante.
    let rendimiento = "";

    // Aquí empezamos a tomar decisiones basadas en el 'promedio' que calculamos.
    // 'if' es como hacer una pregunta: "¿Se cumple esta condición?".
    // Si el 'promedio' es 4.0 o más...
    if (promedio >= 4.0) {
        // ...guardamos el texto "Alto" en nuestra caja 'rendimiento'.
        rendimiento = "Alto";
    // 'else if' es como decir "Bueno, si la pregunta anterior no fue verdad, ¿qué tal esta?".
    // Si el 'promedio' es 3.0 o más (pero menos de 4.0, porque si no, ya habría entrado en el 'if' de arriba)...
    } else if (promedio >= 3.0) {
        // ...guardamos el texto "Medio" en 'rendimiento'.
        rendimiento = "Medio";
    // 'else' es lo que hacemos si ninguna de las condiciones anteriores fue verdad.
    // Si el promedio es menor que 3.0...
    } else {
        // ...guardamos el texto "Bajo" en 'rendimiento'.
        rendimiento = "Bajo";
    }
    
    // Finalmente, la función devuelve (entrega) el resultado.
    // Devuelve un objeto, que es como una caja más grande que contiene dos valores con nombre:
    // el 'promedio' que calculamos y el texto de 'rendimiento' que decidimos.
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}