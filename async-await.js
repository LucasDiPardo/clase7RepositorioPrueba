
async function getProvincias() {
    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
    
    const data = await response.json();
    const provincias = data.provincias;
    console.log(provincias)
}


getProvincias()




