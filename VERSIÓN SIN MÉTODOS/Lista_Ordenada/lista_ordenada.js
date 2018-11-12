/*FUNCIONES DEPENDIENTES DE LA PÁGINA*/
var lista = create();

function cleanData() {
    document.getElementById("num").value = "";
}


function addNumber(num) {
    var error = document.getElementById("error");
    var mostrar_lista = document.getElementById("mostrar_lista");
    error.innerHTML = "";
    try {
        add(lista, num);
        mostrar_lista.innerHTML = lista;
    } catch (err) {
        error.innerHTML = err;
    }
}


function removeNumber(num) {
    var error = document.getElementById("error");
    var mostrar_lista = document.getElementById("mostrar_lista");
    error.innerHTML = "";
    try {
        removeElement(lista, num);
        mostrar_lista.innerHTML = lista;
    } catch (err) {
        error.innerHTML = err;
    }
}


/*FUNCIONES GENÉRICAS*/
var MAX_ELEMENTOS = 5; //constante para almacenar el máximo de elementos de la lista

//Crea una lista con el array ya instanciado con el número de elementos máximo.
function create() {
    var lista = [];
    for (var i = 0; i < MAX_ELEMENTOS; i++) {
        lista[i] = Number.NaN;
    }
    return lista;
}


//Devuelve true o false en función de si la lista está vacía.
function isEmpty(lista) {
    var isEmpty = false;
    if (isNaN(lista[0])) {
        isEmpty = true;
    }
    return isEmpty;
}


//Devuelve true o false en función de si la lista está llena.
function isFull(lista) {
    var isFull = false;
    if (!isNaN(lista[MAX_ELEMENTOS - 1])) {
        isFull = true;
    }
    return isFull;
}


//Devuelve el número de elementos de la lista.
function size(lista) {
    var longitud = 0;
    while (longitud < MAX_ELEMENTOS && !isNaN(lista[longitud])) {
        longitud++;
    }
    return longitud;
}


/**Añade un nuevo elemento al final de la lista.
 * Devuelve el tamaño de la lista una vez añadido.
 */
function add(lista, elemento) {
    elemento = parseInt(elemento);
    if (isNaN(elemento)) {
        throw "El elemento no es un number";
    }
    if (!isFull(lista)) {
        lista[size(lista)] = elemento; //Añadimos el nuevo elemento.
    } else {
        throw "La lista está llena. No puedes meter elementos en ella.";
    }
    return size(lista);
}


//Devuelve el elemento de la lista de la posición indicada.
function get(lista, indice) {

    if (indice > size(lista) - 1) { //si el índice es mayor que el tamaño de la lista
        throw "El índice está fuera de los límites de la lista.";
    } else {
        return lista[indice]; //devolvemos el elemento 
    }

}


/**Devuelve la lista en formato cadena.
 * El delimitador de elementos será "-".
 */
function toString(lista) {
    var str = "";
    if (!isEmpty(lista)) {
        var length = size(lista);
        for (var i = 0; i < length - 1; i++) {
            str = str + lista[i] + " - ";
        }
        str = str + lista[i];
    }
    return str;
}


/**Devuelve la posición del elemento indicado.
 * Si el elemento no está en la lista devuelve -1.
 */
function indexOf(lista, elemento) {
    var posicion = -1;
    elemento = parseInt(elemento);
    if (!isNaN(elemento)) {
        if (!isEmpty(lista)) {
            var longitud = size(lista);
            var i = 0;
            while (i < longitud && posicion === -1) {
                if (lista[i] === elemento) {
                    posicion = i;
                }
                i++
            }
        }
    } else {
        throw "El elemento no es un number";
    }
    return posicion;
}


//Devuelve el máximo número de elementos que podemos tener en la lista.
function capacity(lista) {
    return MAX_ELEMENTOS;
}


//Vacía la lista.
function clear(lista) {
    var elemento = Number.NaN;
    if (!isEmpty(lista)) {
        var longitud = size(lista);
        for (var i = 0; i < longitud; i++) {
            lista[i] = Number.NaN;
        }
    }
}


//Devuelve el primer elemento de la lista.
function firstElement(lista) {
    var primero;
    if (!isEmpty(lista)) {
        primero = lista[0];
    } else {
        throw "La lista está vacía";
    }

    return primero;
}


//Devuelve el último elemento de la lista.
function lastElement(lista) {
    var ultimo;
    if (!isEmpty(lista)) {
        ultimo = lista[size(lista) - 1];
    } else {
        throw "La lista está vacía";
    }

    return ultimo;
}


/**Elimina el elemento de la posición indicada.
 * Devuelve el elemento borrado.
 */
function remove(lista, indice) {
    if (indice > size(lista)) { //si el índice es mayor que el tamaño de la lista
        throw "El índice está fuera de los límites de la lista";
    } else {
        for (var i = indice; i <= size(lista); i++) {
            var aux = lista[indice];
            lista[indice] = Number.NaN;
        }
        return aux;

    }
}


/**Elimina el elemento indicado de la lista. 
 * Devuelve true si se ha podido borrar el elemento,
 * false en caso contrario.
 */
function removeElement(lista, elemento) {
    if (isNaN(elemento)) {
        throw "El elemento no es un number";
    }

    if (!isNaN(elemento)) {
        if (!isEmpty(lista)) {
            var posicion = indexOf(lista, elemento); //guardamos la posición del número pasado 
            if (posicion == -1) { //si la posición es -1, devolvemos FALSE
                return false;
            } else { //en caso contrario, se eliminará ese elemento y devolveremos TRUE

                for (var i = posicion; i < size(lista); i++) {
                    remove(lista, posicion);
                }
                return true;
            }
        }
    }
}


/**Función de testeo en la que comprobaremos, por medio de la consola,
 * el funcionamiento de todos los métodos anteriormente creados.
 */
function test() {
    var lista2 = create();

    console.log("Nº de elementos: " + add(lista2, 5));
    console.log("Nº de elementos: " + add(lista2, 3));
    console.log("Nº de elementos: " + add(lista2, 25));


    console.log("¿Está vacía? " + isEmpty(lista2));
    console.log("¿Está llena? " + isFull(lista2));
    console.log("Su tamaño es:  " + size(lista2));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Devuelvo el elemento de la lista de la posición indicada [2]: " + get(lista2, 2));
    console.log("Devuelvo la posición del elemento indicado '6': " + indexOf(lista2, 6));
    console.log("Devuelvo el máximo número de elementos de la lista: " + capacity(lista2));
    console.log("Devuelvo el primer elemento: " + firstElement(lista2));
    console.log("Devuelvo el último elemento: " + lastElement(lista2));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Elimino el elemento de la posición indicada [1]: " + remove(lista2, 1));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Elimino el elemento indicado de la lista '5': " + removeElement(lista2, 5));
    console.log("Vacío la lista: " + clear(lista2));
    console.log(lista2);

}

test();