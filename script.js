/* Seleccionando el elemento con la clase `loading-text` y asignándolo a la variable `loadText`. */
const loadText = document.querySelector('.loading-text');

/* Seleccionando el elemento con la clase `bg` y asignándolo a la variable `bg`. */
const bg = document.querySelector('.bg');

let load = 0

let int = setInterval(blurring, 30);


function blurring() {
    load++

    /* Comprobando si la variable `load` es mayor que 99. */
    if (load > 99) {
        clearInterval(int)
    }

    /* Establecer el texto del elemento con la clase `loading-text` al valor de la variable `load`. */
    loadText.innerText = `${load}`
    
    /* Está configurando la opacidad del elemento con la clase `loading-text` al valor de la función
    `scale`. */
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    
    /* Establecer el desenfoque del elemento con la clase `bg` al valor de la función `escala`. */
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    /**
     * Escala un número de un rango a otro.
     * @param num - el numero a escala
     * @param in_min - el valor mínimo del rango de entrada
     * @param in_max - el valor máximo del rango de entrada
     * @param out_min - El valor mínimo del rango de salida
     * @param out_max - El valor máximo del rango de salida
     * @returns El valor de retorno es el valor escalado del número de entrada.
     */
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}