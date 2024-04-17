const operacion = (nro1, nro2, callback)=>{
    return setTimeout(()=>{
        callback(nro1,nro2)
}, 500)
}

operacion(1,3, (a,b) => console.log(a+b))
operacion(1,2, (a,b) => console.log(a+b))
operacion(1,1, (a,b) => console.log(a+b))
console.log(3+3)

