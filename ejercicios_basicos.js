// ============================================
// EJERCICIO 1: Calcular promedio y rendimiento
// ============================================

function calcularPromedio(notas) {
    let suma = 0;
    
    // Recorrer el arreglo para sumar todas las notas
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
    // Calcular el promedio
    let promedio = suma / notas.length;
    
    // Determinar el rendimiento
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

// Ejemplo de uso del Ejercicio 1
console.log("=== EJERCICIO 1 ===");
let cantidadNotas = 5;
let notas = [4.5, 3.8, 4.2, 3.9, 4.0];
let resultado1 = calcularPromedio(notas);
console.log("Promedio: " + resultado1.promedio.toFixed(2));
console.log("Rendimiento: " + resultado1.rendimiento);


// ============================================
// EJERCICIO 2: Sistema de autenticación
// ============================================

const validarAcceso = function(edad, contraseña) {
    let contraseñaCorrecta = "aprendiz2024";
    let mensaje = "";
    
    // Validar que sea mayor de edad Y la contraseña sea correcta
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

// Ejemplo de uso del Ejercicio 2
console.log("\n=== EJERCICIO 2 ===");
let edad = 20;
let contraseña = "aprendiz2024";
console.log(validarAcceso(edad, contraseña));


// ============================================
// EJERCICIO 3: Tabla de multiplicar
// ============================================

const generarTabla = (numero) => {
    let tabla = [];
    
    // Generar la tabla del 1 al 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla[i - 1] = numero + " x " + i + " = " + resultado;
    }
    
    return tabla;
};

// Ejemplo de uso del Ejercicio 3
console.log("\n=== EJERCICIO 3 ===");
let numeroBase = 7;
let tablaMultiplicar = generarTabla(numeroBase);
console.log("Tabla del " + numeroBase + ":");
for (let i = 0; i < tablaMultiplicar.length; i++) {
    console.log(tablaMultiplicar[i]);
}


// ============================================
// EJERCICIO 4: Calcular impuestos
// ============================================

function calcularImpuestoUnitario(valor, porcentaje) {
    let impuesto = valor * (porcentaje / 100);
    return impuesto;
}

const procesarImpuestos = function(productos) {
    let impuestoTotal = 0;
    
    // Recorrer cada producto
    for (let i = 0; i < productos.length; i++) {
        let valor = productos[i].valor;
        let porcentaje = productos[i].porcentaje;
        
        // Calcular impuesto del producto actual
        let impuesto = calcularImpuestoUnitario(valor, porcentaje);
        impuestoTotal = impuestoTotal + impuesto;
    }
    
    return impuestoTotal;
};

// Ejemplo de uso del Ejercicio 4
console.log("\n=== EJERCICIO 4 ===");
let productos = [
    { valor: 100000, porcentaje: 19 },
    { valor: 50000, porcentaje: 19 },
    { valor: 75000, porcentaje: 19 }
];
let impuestoTotal = procesarImpuestos(productos);
console.log("Impuesto total acumulado: $" + impuestoTotal.toFixed(2));


// ============================================
// EJERCICIO 5: Buscar elemento en arreglo
// ============================================

const buscarElemento = (lista, elemento) => {
    let encontrado = false;
    
    // Recorrer el arreglo manualmente
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            encontrado = true;
            break; // Salir del ciclo cuando se encuentra
        }
    }
    
    return encontrado;
};

// Ejemplo de uso del Ejercicio 5
console.log("\n=== EJERCICIO 5 ===");
let listaElementos = ["manzana", "pera", "uva", "naranja", "banano"];
let elementoBuscar = "uva";
let resultado5 = buscarElemento(listaElementos, elementoBuscar);

if (resultado5) {
    console.log("El elemento '" + elementoBuscar + "' SÍ existe en el arreglo.");
} else {
    console.log("El elemento '" + elementoBuscar + "' NO existe en el arreglo.");
}

// Prueba con elemento que no existe
let elementoBuscar2 = "sandía";
let resultado5b = buscarElemento(listaElementos, elementoBuscar2);
if (resultado5b) {
    console.log("El elemento '" + elementoBuscar2 + "' SÍ existe en el arreglo.");
} else {
    console.log("El elemento '" + elementoBuscar2 + "' NO existe en el arreglo.");
}