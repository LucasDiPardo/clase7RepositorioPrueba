const miPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //generar numero aleatorio
        const numero  = Math.random()
        if(numero >= 0.5){ //si el numero es mayor devuelve por la funcion resolve - FULFILLED
            resolve('Exito')
        }else{ //sino devuelve por la funcion reject - REJECT
            reject(new Error('Error !'))
        }
        console.log('')
    },2000)//demora 2 segundos el setTime
})

miPromesa
    .then((resultado) => {
        console.log('resultado', resultado)
    })
    .catch((error) => {
        console.log('la operacio fallo', error)
    })
    .finally(()=>{
        console.log('finalizo, se ejecuta siempre, es opcional')
    })



