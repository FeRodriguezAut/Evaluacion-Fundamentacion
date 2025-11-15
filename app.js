// Importar las funciones de los módulos de ejercicios
import { calcularPromedio } from './promedio_notas.js';
import { validarAcceso } from './operadores-logicos.js';
import { generarTabla } from './Tabla_Multiplicar.js';
import { procesarImpuestos } from './Calcular_impuestos.js';
import { buscarElemento } from './Buscar_elemento.js';

// --- EJERCICIO 1 ---
document.getElementById('btn-1').addEventListener('click', () => {
    const input = document.getElementById('notas').value;
    const output = document.getElementById('output-1');
    const notasArray = input.split(',').map(n => parseFloat(n.trim()));

    if (notasArray.some(isNaN)) {
        output.innerHTML = "Error: Asegúrese de ingresar solo números separados por comas.";
        return;
    }
    const resultado = calcularPromedio(notasArray);
    output.innerHTML = `Promedio: ${resultado.promedio.toFixed(2)}<br>Rendimiento: ${resultado.rendimiento}`;
});

// --- EJERCICIO 2 ---
document.getElementById('btn-2').addEventListener('click', () => {
    const edad = parseInt(document.getElementById('edad').value);
    const password = document.getElementById('password').value;
    const output = document.getElementById('output-2');

    if (isNaN(edad)) {
        output.innerHTML = "Error: Ingrese una edad válida.";
        return;
    }
    const mensaje = validarAcceso(edad, password);
    output.innerHTML = `Resultado: ${mensaje}`;
});

// --- EJERCICIO 3 ---
document.getElementById('btn-3').addEventListener('click', () => {
    const numero = parseInt(document.getElementById('numero-tabla').value);
    const output = document.getElementById('output-3');

    if (isNaN(numero)) {
        output.innerHTML = "Error: Ingrese un número válido.";
        return;
    }
    const tabla = generarTabla(numero);
    output.innerHTML = tabla.join('<br>');
});

// --- EJERCICIO 4 ---
document.getElementById('btn-4').addEventListener('click', () => {
    const output = document.getElementById('output-4');
    const productos = [
        { valor: 100000, porcentaje: 19 },
        { valor: 50000, porcentaje: 19 },
        { valor: 75000, porcentaje: 19 }
    ];
    const impuestoTotal = procesarImpuestos(productos);
    output.innerHTML = `Se procesaron ${productos.length} productos de ejemplo.<br><strong>Impuesto total acumulado:</strong> $${impuestoTotal.toFixed(2)}`;
});

// --- EJERCICIO 5 ---
document.getElementById('btn-5').addEventListener('click', () => {
    const elemento = document.getElementById('elemento-buscar').value;
    const output = document.getElementById('output-5');

    if (!elemento) {
        output.innerHTML = "Error: Ingrese un elemento para buscar.";
        return;
    }
    const listaElementos = ["manzana", "pera", "uva", "naranja", "banano"];
    const encontrado = buscarElemento(listaElementos, elemento.trim().toLowerCase());

    if (encontrado) {
        output.innerHTML = `El elemento '<strong>${elemento}</strong>' <strong>SÍ</strong> existe en la lista.`;
    } else {
        output.innerHTML = `El elemento '<strong>${elemento}</strong>' <strong>NO</strong> existe en la lista.`;
    }
    output.innerHTML += `<br><small>Lista de ejemplo: ${listaElementos.join(', ')}</small>`;
});
