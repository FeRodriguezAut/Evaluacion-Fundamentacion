// --- Lógica del Ejercicio 2 ---
export function validarAcceso(edad, contraseña) {
    const contraseñaCorrecta = "sena2025";
    let mensaje = "";
    
    if (edad >= 18 && contraseña === contraseñaCorrecta) {
        mensaje = "Acceso concedido. Bienvenido al sistema.";
    } else {
        if (edad < 18) {
            mensaje = "Acceso denegado. Debe ser mayor de edad.";
        } else {
            mensaje = "Acceso denegado. Contraseña incorrecta.";
        }
    }
    
    return mensaje;
};
