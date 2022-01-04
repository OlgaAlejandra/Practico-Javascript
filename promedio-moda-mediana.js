function calcularMediaAritmetica(lista)
{
    /* let sumaLista = 0; */
    /* for(let i = 0; i<lista.length;i++)
    {
        sumaLista = sumaLista + lista[i];
    }
    */
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemneto)
        {
            return valorAcumulado + nuevoElemneto;
        }
    );
    const promedioLista =sumaLista / lista.length;
    return promedioLista;
}


function calcularMediana(lista){
    //En la variable listaOrdenada está la lista que se ingresó como
    //argumento pero ordenada ascendentemente. 
    const listaOrdenada = lista.sort(function(primerElemento, segundoElemento){
        return primerElemento - segundoElemento;
    });
    
    //Variable que almacena el índice que se encuentra a la mita de la lista.
    const mitadLista = parseInt(listaOrdenada.length / 2);

    //Variable que almacena el valor de la mediana.
    let mediana; 
    
    //Verificar si la lista tiene n elementos par o impar.
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    }
    else{
        mediana = listaOrdenada[mitadLista];
        return mediana;
    }
}

function esPar(numerito){
    //Si es par...
    if(numerito % 2 === 0){
        return true;
    }
    //Si es impar...
    else{
        return false;
    }
}

function CalcularModa(lista) {
    const listaObj = {};

    lista.map(
        function(e) {
            if(listaObj[e]) {

                listaObj[e] += 1;
            } else {
    
                listaObj[e] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
};