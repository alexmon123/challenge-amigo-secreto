listaAmigos=[];

function  limpiarCaja(){
    let limpiaCaja=document.getElementById("amigo").value="";
    return limpiaCaja;
}

function asignarTextoElemento(elemento,texto){
    elemento=document.querySelector(elemento)
    elemento.innerHTML=texto;
    return;
}

function agregarAmigo(){
     let nombreDeUsuario = (document.getElementById("amigo").value);
        if (nombreDeUsuario === ""){
            asignarTextoElemento("h2","ingrese un nombre primero ");
        }
        else{
            listaAmigos.push(nombreDeUsuario);
            limpiarCaja();
                console.log(listaAmigos);
                
            }
    }

function sortearAmigo(){
    if (listaAmigos.length === 0){
        asignarTextoElemento("h2","la lista esta vacia, por lo tanto no se puede sortear");
    }
    else{
        let numeroSorteado = Math.floor(Math.random()*listaAmigos.length);
        let nombreSorteado = listaAmigos[numeroSorteado];
        asignarTextoElemento("h2",`el amigo sorteado es:${nombreSorteado}`)
        console.log(nombreSorteado);
    }
}
