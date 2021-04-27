import Comentario from './comentario';

const com = new Comentario();
console.log(com.obtenerComentarios());


let data = com.axiosObtenerComentario()




//let promesa = com.promesaObtenerComentarios();

/* promesa
    .then(r=>{
        console.log(r);
    })

    .catch(r=>{
        console.log(r);
    })

    .finally(r=>{
        console.log("Finaly");
    }) */
