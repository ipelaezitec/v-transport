function inicializarMatriz(listaReferencia){    
    let matriz= [];
    for (let indice = 0; indice < listaReferencia.length; indice++) { 
        let listaVacia=[];
        for (let subindice = 0; subindice < listaReferencia[indice].length; subindice++) {
            
            listaVacia.push(0);
        }
        matriz.push(listaVacia)
    }
    return matriz
}

function inicializarMarca(listaReferencia) {
    let lista= [];
    for (let i = 0; i < listaReferencia.length; i++) {
        lista.push(0)        
    }
    return lista
}

function imprimirTiposMasTotal(listaTipos,contadorTipos){
    
    console.log("Manifiesto de los vehículos a transportar");
    console.log("------------------------------------");

    let tipos = ["Auto","Utilitario","Sub","Pick-up"]
    let contadorTotal = 0;
    for (let i = 0; i < tipos.length; i++) {
        let contador=0;
        for (let e = 0; e < contadorTipos.length; e++) {
            const element = contadorTipos[e];
            if (tipos[i]==element) {
                contador++;
                contadorTotal++;
            }
        }
        console.log(tipos[i]+" : "+contador);
    }

    console.log("------------");
    console.log("Total : "+contadorTotal+"\n");

}

function imprimirModelosMasMarcas(listaContadorModelos,listaContadorMarca,listaMarcas,listaModelos){

    for (let i = 0; i < listaContadorModelos.length; i++) { // IMPRIMIR
        if(listaContadorMarca[i]>0){
            console.log(listaMarcas[i]+" : "+listaContadorMarca[i]);
            for (let indice = 0; indice < listaContadorModelos[i].length; indice++) {
               
                if (listaContadorModelos[i][indice]>0) {
                    console.log("   "+listaModelos[i][indice]+" : "+listaContadorModelos[i][indice]);
                    
                }
            }
        }
    }

}

function generarInforme(arregloPrincipal){ //generarInforme? changename
    let listaModelos=[
                    ["Palio","Uno","Linea","Fiorino","Argo","Toro"],
                    ["Megane","Kiwi","Koleos","Oroch","Kangoo","Zandero","Duster","Master"],
                    ["S-10","Corsa","Tracker","Cruze"],
                    ["Fiesta","Focus","Transit","Ranger"],
                    ["Ka","Gol","Vento","Passat","Bora","Amarok"]
                    ];

    // a listasMarcas solamente lo vincula con listaModelos la cantidad de arrays tal tiene dentro (5 en este caso).
    let listaMarcas=["Fiat","Renault","Chevrolet","Ford","VW"] 

    let listaTipos=[
                    ["Auto","Auto","Auto","Utilitario","Auto","Pick-up"],
                    ["Auto","Auto","Sub","Pick-up","Utilitario","Auto","Sub","Utilitario"],
                    ["Pick-up","Auto","Sub","Auto"],
                    ["Auto","Auto","Utilitario","Pick-up"],
                    ["Auto","Auto","Auto","Auto","Auto","Pick-up"]
                    ];


    let listaContadorModelos = inicializarMatriz(listaModelos);
    let listaContadorMarca=inicializarMarca(listaMarcas);
    

    let contadorTipos=[]; 
    for (let indiceTupla = 0; indiceTupla < listaModelos.length; indiceTupla++) {
        // recorro las 5 "tuplas"
        for (let indiceMain = 0; indiceMain < arregloPrincipal.length; indiceMain++) { 
            //recorro la lista principal obtenida  
            const elementToFind = arregloPrincipal[indiceMain];
            for (let indice = 0; indice <listaModelos[indiceTupla].length; indice++) { 
                // comparo la lista principal obtenida con la lista de modelos
                if (elementToFind == listaModelos[indiceTupla][indice]){
                    
                    listaContadorModelos[indiceTupla][indice]++;
                    listaContadorMarca[indiceTupla]++;
                    contadorTipos.push(listaTipos[indiceTupla][indice]);

                    break;
                }
            }
        }        
    }

    
    imprimirTiposMasTotal(listaTipos,contadorTipos); 
    imprimirModelosMasMarcas(listaContadorModelos,listaContadorMarca,listaMarcas,listaModelos)

    

}
    
function validadorInicial(arregloPrincipal){
    if (Array.isArray(arregloPrincipal)){
        generarInforme(arregloPrincipal)
        // controlar que los elementos sean todos string
        // probablemente hacer comparación en minuscula o capitalizar
    }
    else{
        console.log("Error : El objeto recibido no es un array")
    }
}

function imprimirDetalles(arregloPrincipal){
    validadorInicial(arregloPrincipal)
}

let arregloPrincipal = ["Cruze", "Palio", "Kangoo", "Ranger", "Kangoo", "Uno", "Ranger", "Palio", "Uno", "Megane", "Koleos", "Fiesta", "Toro"]; 

imprimirDetalles(arregloPrincipal)
