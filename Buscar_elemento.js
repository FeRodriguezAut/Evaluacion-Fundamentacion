// --- Lógica del Ejercicio 5 ---
export function buscarElemento(lista, elemento) {
    let encontrado = false;
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            encontrado = true;
            break; 
        }
    }
    
    return encontrado;
};