fetch('https://apis.datos.gob.ar/georef/api/provincias')
.then((respuesta)=> respuesta.json())
.then((datos)=>{
    console.log(datos)
})
.catch((error)=>{
    console.log('error fallo el fetch')
})