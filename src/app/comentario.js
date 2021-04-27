const axios = require('axios');

class Comentario {

    obtenerComentarios() {
        return [];
    }


    axiosObtenerComentario(){
        let peticion =axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        peticion
        .then(r=>{
            console.log(r.data);
        })
    }

    fetchObtenerComentario(){
      let promesa =  fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')

      promesa
      .then(r=>{
          return r.json()
      })
      .then(r=>{
          console.log(r);
      })
      .catch()
      .finally(()=>{
          console.log('Finalizo la promesa');
      })
    }

    promesaObtenerComentarios() {
        let miPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('La promesa se cumplio satisfactoriamente')
                reject('La promesa fallo')
            }, 200)

        })

        miPromesa.then(r => {
            console.log('La respuesta es: ' + r);
        })
        return miPromesa
    }
  
}
export default Comentario;
