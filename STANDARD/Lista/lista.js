/*FUNCIONES DEPENDIENTES DE LA PÁGINA*/
var lista = create();


function cleanData() {
    document.getElementById("num").value = "";
}

//Función para añadir un número a la lista
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


//Función para eliminar un número de la lista
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
    let lista = [];
    return lista;
}


//Devuelve true o false en función de si la lista está vacía.
function isEmpty(lista) {
    return (lista.length === 0);
}


//Devuelve true o false en función de si la lista está llena.
function isFull(lista) {
    return (lista.length === MAX_ELEMENTOS);
}


//Devuelve el número de elementos de la lista.
function size(lista) {
    return lista.length;
}


/**Añade un nuevo elemento al final de la lista.
 * Devuelve el tamaño de la lista una vez añadido.
 */
function add(lista, elemento) {
    elemento = parseInt(elemento);
    if (isNaN(elemento)) { //si el elemento no es un number
        throw "El elemento no es un number";
    }
    if (!isFull(lista)) { //si la lista no está llena
        lista.push(elemento); //añadimos el nuevo elemento
    } else {
        throw "La lista está llena. No puedes meter elementos en ella.";
    }
    return size(lista); //devolvemos el tamaño de la lista
}


/**Añade un nuevo elemento en la posición especificada en la lista.
 * Devuelve el tamaño de la lista una vez añadido.
 */
function addAt(lista, elemento, indice) {
    if (isNaN(elemento)) { //si el elemento no es un number
        throw "El elemento no es un number";
    } else if (isFull(lista)) { //si la lista está llena
        throw "La lista está llena. No puedes meter elementos en ella.";
    } else if (indice >= size(lista)) { //si el índice es mayor o igual que el tamaño de la lista
        throw "El índice está fuera de los límites de la lista.";
    } else if (indice >= lista.length) { //si la posición es mayor que la longitud del array, le asignamos al elemento la última posición del array
        lista[lista.length] = elemento;
    } else {
        var longitud = lista.length;
        for (var i = indice, aux; i < longitud; i++) {
            aux = lista[i]; //aquí guardamos el elemento que ya hay en el array
            lista[i] = elemento; //a lista[i] le asignamos el elemento
            elemento = aux; //a elemento le asignamos el valor de aux, para que en la siguiente pasada la posición del array ya tome ese valor
        }
        lista[i] = elemento; //a lista[i] le asignamos el valor del elemento
    }

    return size(lista); //devolvemos el tamaño de la lista
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
    if (!isEmpty(lista)) { //si la lista no está vacía
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
    var posicion = -1; //inicializamos posición a -1
    elemento = parseInt(elemento);
    if (!isNaN(elemento)) { //si el elemento es un number
        if (!isEmpty(lista)) { //y la lista no está vacía
            posicion = lista.indexOf(elemento); //a posición le asignamos la posición del elemento pasado
        }
    } else {
        throw "El elemento no es un number";
    }
    return posicion; //devolvemos la posición
}


/**Devuelve la posición del elemento indicado comenzando por el final.
 * Si el elemento no está en la lista devuelve -1.
 */
function lastIndexOf(lista, elemento) {
    var posicion = -1; //inicializamos posición a -1
    elemento = parseInt(elemento);
    if (!isNaN(elemento)) { //si el elemento es un number
        if (!isEmpty(lista)) { //y la lista no está vacía
            posicion = lista.lastIndexOf(elemento); //a posición le asignamos la posición del elemento pasado
        }
    } else {
        throw "El elemento no es un number";
    }
    return posicion; //devolvemos la posición
}


//Devuelve el máximo número de elementos que podemos tener en la lista.
function capacity(lista) {
    return MAX_ELEMENTOS;
}


//Vacía la lista.
function clear(lista) {
    if (!isEmpty(lista)) { //si la lista no está vacía
        lista.splice(0, lista.length); //eliminamos la lista completa a partir de la posición 0
    }
}


//Devuelve el primer elemento de la lista.
function firstElement(lista) {
    var primero;
    if (!isEmpty(lista)) { //si la lista no está vacía
        primero = lista[0]; //a primero le asignamos el valor de la primera posición
    } else {
        throw "La lista está vacía";
    }

    return primero; //devolvemos el primer elemento 
}


//Devuelve el último elemento de la lista.
function lastElement(lista) {
    var ultimo;
    if (!isEmpty(lista)) { //si la lista no está vacía
        ultimo = lista[size(lista) - 1]; //a ultimo le asignamos el valor de la última posición
    } else {
        throw "La lista está vacía";
    }

    return ultimo; //devolvemos el último elemento
}


/**Elimina el elemento de la posición indicada.
 * Devuelve el elemento borrado.
 */
function remove(lista, indice) {
    if (indice > size(lista)) { //si el índice es mayor que el tamaño de la lista
        throw "El índice está fuera de los límites de la lista";
    } else {
        return eliminado = lista.splice(indice, 1); //devolvemos el elemento que ha sido eliminado
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
                remove(lista, posicion);
                return true;
            }
        }
    }
}


/**Reemplaza el elemento de la lista indicado por el índice.
 * Devuelve el elemento que estaba anteriormente en la lista.
 */
function set(lista, elemento, indice) {

    if (indice > size(lista)) { //si el índice es mayor que el tamaño de la lista
        throw "El índice está fuera de los límites de la lista";
    } else if (isNaN(elemento)) { //si el elemento no es un number
        throw "El elemento no es un number";
    } else {
        return lista.splice(indice, 1, elemento); //devolvemos el elemento que había antes en la lista
    }
}


/**Función de testeo en la que comprobaremos, por medio de la consola,
 * el funcionamiento de todos los métodos anteriormente creados.
 */
function test() {
    var lista2 = create();

    //Añadimos valores a la lista
    try {
        for (var i = 0; i < 3; i++) {
            console.log("Nº de elementos: " + add(lista2, i * 10));
        }
        add(lista2, i); //It will generate an exception.
    } catch (err) {
        console.log(err);
    }

    console.log("¿Está vacía? " + isEmpty(lista2));
    console.log("¿Está llena? " + isFull(lista2));
    console.log("Su tamaño es:  " + size(lista2));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Añado un nuevo elemento '4' en la posición indicada [2]: " + addAt(lista2, 4, 2));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Devuelvo el elemento de la lista de la posición indicada [4]: " + get(lista2, 4));
    console.log("Devuelvo la posición del elemento indicado '6': " + indexOf(lista2, 6));
    console.log("Devuelvo la posición del elemento indicado '20' empezando por el final: " + lastIndexOf(lista2, 20));
    console.log("Devuelvo el máximo número de elementos de la lista: " + capacity(lista2));
    console.log("Devuelvo el primer elemento: " + firstElement(lista2));
    console.log("Devuelvo el último elemento: " + lastElement(lista2));
    console.log("Elimino el elemento de la posición indicada [3]: " + remove(lista2, 3));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Elimino el elemento indicado de la lista '5': " + removeElement(lista2, 5));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Reemplazo el elemento '8' indicado por el índice [0]: " + set(lista2, 8, 0));
    console.log("Devuelvo la lista en formato cadena: " + toString(lista2));
    console.log("Vacío la lista: " + clear(lista2));
    console.log(lista2);

}

test();