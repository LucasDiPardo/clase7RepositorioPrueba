const dividir = (a,b) =>{
    if(b === 0){
        throw new Error("No se puede dividir por 0")
    }
}

try {
    const resultado = dividir(1,0)
    console.log(resultado)
    
}catch(error){
    console.log(error)
}

