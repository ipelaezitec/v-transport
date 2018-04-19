


function generarInforme(arregloPrincipal){ //generarInforme? changename
    let listaModelos=[
                    ["Palio","Uno","Linea","Fiorino","Argo","Toro"],
                    ["Megane","Kiwi","Koleos","Oroch","Kangoo","Zandero","Duster","Master"],
                    ["S-10","Corsa","Tracker","Cruze"],
                    ["Fiesta","Focus","Transit","Ranger"],
                    ["Ka","Gol","Vento","Passat","Bora","Amarok"]
                    ];

    let listaMarcas=["Fiat","Renault","Chevrolet","Ford","VW"] 
    // a listasMarcas solamente lo vincula con listaModelos la cantidad de arrays tal tiene dentro (5 en este caso).


    let listaTipos=[
                    ["Auto","Auto","Auto","Utilitario","Auto","Pick-up"],
                    ["Auto","Auto","Sub","Pick-up","Utilitario","Auto","Sub","Utilitario"],
                    ["Pick-up","Auto","Sub","Auto"],
                    ["Auto","Auto","Utilitario","Pick-up"],
                    ["Auto","Auto","Auto","Auto","Auto","Pick-up"]
                    ];

                    
    let listaContador= [];
    for (let indice = 0; indice < listaModelos.length; indice++) { // hacer que sea función, no va a importar los tamaños.
        // que sea "lista" y retorne "matriz"
        let listaVacia=[];
        for (let subindice = 0; subindice < listaModelos[indice].length; subindice++) {
            
            listaVacia.push(0);
        }
        listaContador.push(listaVacia)
    }

    // aca tiene que quedar un let listaContadorModelos = inicializarMatriz(listaModelos);
    // aca tiene que quedar un "listaContadorTipos"   let listaContadorTipos = listaContadorModelos.slice();

    let listaContadorMarca=[0,0,0,0,0]; // hacer que se genere a partir de la lista de marcas

    for (let indiceTupla = 0; indiceTupla < listaModelos.length; indiceTupla++) { 
        // recorro las 5 "tuplas"
        for (let indiceMain = 0; indiceMain < arregloPrincipal.length; indiceMain++) { 
            //recorro la lista principal obtenida  
            const elementToFind = arregloPrincipal[indiceMain];
            for (let indice = 0; indice <listaModelos[indiceTupla].length; indice++) { 
                // comparo la lista principal obtenida con la lista de modelos
                if (elementToFind == listaModelos[indiceTupla][indice]){
                    
                    listaContador[indiceTupla][indice]++;
                    listaContadorMarca[indiceTupla]++; 
                    break;
                }
            }
        }        
    }
    console.log(listaContador);
    console.log(listaContadorMarca);
    
    
    
    for (let i = 0; i < listaContador.length; i++) { // IMPRIMIR
        if(listaContadorMarca[i]>0){
            console.log(listaMarcas[i]+" : "+listaContadorMarca[i]);
            for (let indice = 0; indice < listaContador[i].length; indice++) {
               
                if (listaContador[i][indice]>0) {
                    console.log("   "+listaModelos[i][indice]+" : "+listaContador[i][indice]);
                }
            }
        }
    }
    
    
}
    
// probablemente hacer comparación en minuscula o capitalizar
//cambiar a validadorInicial?
function controladorInicial(arregloPrincipal){
    if (Array.isArray(arregloPrincipal)){
        generarInforme(arregloPrincipal)
        // controlar que los elementos sean todos string
    }
    else{
        console.log("Error : El objeto recibido no es un array")
    }
}

function imprimirDetalles(arregloPrincipal){
    controladorInicial(arregloPrincipal)
}

let arregloPrincipal = ["Cruze", "Palio", "Kangoo", "Ranger", "Kangoo", "Uno", "Ranger", "Palio", "Uno", "Megane", "Koleos", "Fiesta", "Toro"]; 

imprimirDetalles(arregloPrincipal)

/* 
        consideraciones : NO OBJETOS



            tipo de vehiculo

            Autos : 8
            Camionetas: 3
            Subs: 1
            Utilitarios: 2
            ------------------
            total: 13 vehiculos

            Fiat: 5
              Palio: 2
              Uno: 2
              Toro: 1
           Renault: 4
              Megane: 1
              Koleos: 1
              Kangoo: 2
          Chevrolet: 1
              Cruze: 1
          Ford: 3
              Fiesta: 1
              Ranger: 2 */
