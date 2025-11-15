

// --- Conexión con otros archivos de JavaScript ---
// Aquí estamos trayendo "cajas de herramientas" (funciones) desde otros archivos para usarlas en este.
// Cada 'import' trae una herramienta específica que realiza una tarea.

import { calcularPromedio } from './promedio_notas.js'; // Herramienta para calcular el promedio de notas.
import { validarAcceso } from './operadores-logicos.js'; // Herramienta para verificar si alguien puede entrar.
import { generarTabla } from './Tabla_Multiplicar.js'; // Herramienta para crear tablas de multiplicar.
import { procesarImpuestos } from './Calcular_impuestos.js'; // Herramienta para calcular impuestos de productos.
import { buscarElemento } from './Buscar_elemento.js'; // Herramienta para buscar algo en una lista.

// --- Lógica del Ejercicio 1: Calcular Promedio ---

document.getElementById('btn-1').addEventListener('click', () => {
    // Cuando alguien hace click en el botón, se ejecuta este código:

    // 1. Tomamos lo que el usuario escribió en el campo de texto con el ID 'notas'.
    const input = document.getElementById('notas').value;
    // 2. Buscamos el lugar en el HTML donde mostraremos el resultado (tiene el ID 'output-1').
    const output = document.getElementById('output-1');
    // 3. El texto de las notas viene como "1, 2, 3". Lo separamos por las comas y convertimos cada pedacito a un número.
    const notasArray = input.split(',').map(n => parseFloat(n.trim()));

    // 4. Revisamos si alguno de los valores no es un número (por si el usuario escribió letras).
    if (notasArray.some(isNaN)) {
        // Si hay algo que no es un número, mostramos un mensaje de error.
        output.innerHTML = "Error: Asegúrese de ingresar solo números separados por comas.";
        return; // Detenemos la ejecución aquí.
    }
    // 5. Usamos nuestra herramienta 'calcularPromedio' para obtener el resultado.
    const resultado = calcularPromedio(notasArray);
    // 6. Mostramos el resultado en la página web, con el promedio y el rendimiento.
    output.innerHTML = `Promedio: ${resultado.promedio.toFixed(2)}<br>Rendimiento: ${resultado.rendimiento}`;
});

// --- Lógica del Ejercicio 2: Validar Acceso ---

document.getElementById('btn-2').addEventListener('click', () => {
    // 1. Tomamos la edad que el usuario ingresó y la convertimos a un número.
    const edad = parseInt(document.getElementById('edad').value);
    // 2. Tomamos la contraseña que el usuario escribió.
    const password = document.getElementById('password').value;
    // 3. Buscamos dónde mostrar el resultado.
    const output = document.getElementById('output-2');

    // 4. Si la edad no es un número válido (por ejemplo, si el campo está vacío), mostramos un error.
    if (isNaN(edad)) {
        output.innerHTML = "Error: Ingrese una edad válida.";
        return; // Detenemos la ejecución.
    }
    // 5. Usamos la herramienta 'validarAcceso' para ver si puede entrar o no.
    const mensaje = validarAcceso(edad, password);
    // 6. Mostramos el mensaje de bienvenida o de acceso denegado en la página.
    output.innerHTML = `Resultado: ${mensaje}`;
});

// --- Lógica del Ejercicio 3: Generar Tabla de Multiplicar ---

document.getElementById('btn-3').addEventListener('click', () => {
    // 1. Tomamos el número para la tabla y lo convertimos a un número entero.
    const numero = parseInt(document.getElementById('numero-tabla').value);
    // 2. Buscamos dónde vamos a mostrar el resultado.
    const output = document.getElementById('output-3');

    // 3. Si lo que ingresó el usuario no es un número, mostramos un mensaje de error.
    if (isNaN(numero)) {
        output.innerHTML = "Error: Ingrese un número válido.";
        return; // Detenemos la ejecución.
    }
    // 4. Usamos la herramienta 'generarTabla' para crear la tabla de multiplicar.
    const tabla = generarTabla(numero);
    // 5. Mostramos la tabla en la página. 'join('<br>')' une cada línea de la tabla con un salto de línea HTML.
    output.innerHTML = tabla.join('<br>');
});

// --- Lógica del Ejercicio 4: Calcular Impuestos ---

document.getElementById('btn-4').addEventListener('click', () => {
    // 1. Buscamos el lugar donde se mostrará el resultado.
    const output = document.getElementById('output-4');
    // 2. Creamos una lista de productos de ejemplo. Cada producto es un objeto con un 'valor' y un 'porcentaje' de impuesto.
    const productos = [
        { valor: 100000, porcentaje: 19 }, // Producto 1
        { valor: 50000, porcentaje: 19 },  // Producto 2
        { valor: 75000, porcentaje: 19 }   // Producto 3
    ];
    // 3. Usamos la herramienta 'procesarImpuestos' para calcular el total de impuestos de la lista de productos.
    const impuestoTotal = procesarImpuestos(productos);
    // 4. Mostramos un resumen del cálculo en la página. 'toFixed(2)' muestra el número con solo 2 decimales.
    output.innerHTML = `Se procesaron ${productos.length} productos de ejemplo.<br><strong>Impuesto total acumulado:</strong> $${impuestoTotal.toFixed(2)}`;
});

// --- Lógica del Ejercicio 5: Buscar Elemento en una Lista ---

document.getElementById('btn-5').addEventListener('click', () => {
    // 1. Tomamos el texto que el usuario quiere buscar del campo de entrada.
    const elemento = document.getElementById('elemento-buscar').value;
    // 2. Buscamos el lugar donde se mostrará el resultado.
    const output = document.getElementById('output-5');

    // 3. Si el usuario no escribió nada en el campo, mostramos un error.
    if (!elemento) {
        output.innerHTML = "Error: Ingrese un elemento para buscar.";
        return; // Detenemos la ejecución.
    }
    // 4. Creamos una lista de frutas de ejemplo para hacer la búsqueda.
    const listaElementos = ["manzana", "pera", "uva", "naranja", "banano"];
    // 5. Usamos la herramienta 'buscarElemento'. Le pasamos la lista y el elemento a buscar.
    // 'trim()' quita espacios al inicio y al final, y 'toLowerCase()' convierte todo a minúsculas para que la búsqueda no distinga entre "Uva" y "uva".
    const encontrado = buscarElemento(listaElementos, elemento.trim().toLowerCase());

    // 6. Dependiendo de si se encontró o no, mostramos un mensaje diferente.
    if (encontrado) {
        // Si la variable 'encontrado' es verdadera...
        output.innerHTML = `El elemento '<strong>${elemento}</strong>' <strong>SÍ</strong> existe en la lista.`;
    } else {
        // Si la variable 'encontrado' es falsa...
        output.innerHTML = `El elemento '<strong>${elemento}</strong>' <strong>NO</strong> existe en la lista.`;
    }
    // 7. También mostramos cuál era la lista de ejemplo para que el usuario sepa dónde se buscó.
    output.innerHTML += `<br><small>Lista de ejemplo: ${listaElementos.join(', ')}</small>`;
});