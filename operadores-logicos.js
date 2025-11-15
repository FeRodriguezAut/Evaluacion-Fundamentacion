// --- Lógica del Ejercicio 2: Validar Acceso ---

// 'export' permite que esta función sea usada en otros archivos.
// Esta función decide si un usuario puede entrar o no, basándose en su edad y la contraseña que ingresó.
export function validarAcceso(edad, contraseña) {
    // Guardamos la contraseña correcta en una caja (constante). Así, si queremos cambiarla, solo lo hacemos en un lugar.
    const contraseñaCorrecta = "sena2025";
    
    // Creamos una caja (variable) para guardar el mensaje que le mostraremos al usuario.
    let mensaje = "";
    
    // Aquí usamos el operador '&&' (Y). Esta condición solo es verdadera si AMBAS partes son verdaderas.
    // Preguntamos: "¿La edad es 18 o más Y la contraseña ingresada es igual a la contraseña correcta?"
    if (edad >= 18 && contraseña === contraseñaCorrecta) {
        // Si ambas cosas son ciertas, el acceso es concedido.
        mensaje = "Acceso concedido. Bienvenido al sistema.";
    } else {
        // Si la condición de arriba no se cumplió, significa que al menos una de las dos cosas (o ambas) es falsa.
        // Ahora tenemos que averiguar por qué se le negó el acceso para darle un mensaje más claro.
        
        // Preguntamos: "¿La edad es menor a 18?"
        if (edad < 18) {
            // Si es menor de edad, le damos este mensaje.
            mensaje = "Acceso denegado. Debe ser mayor de edad.";
        } else {
            // Si no es menor de edad (o sea, tiene 18 o más), pero el acceso fue denegado,
            // la única razón posible es que la contraseña estaba mal.
            mensaje = "Acceso denegado. Contraseña incorrecta.";
        }
    }
    
    // La función devuelve el mensaje que preparamos, ya sea de bienvenida o de error.
    return mensaje;
};