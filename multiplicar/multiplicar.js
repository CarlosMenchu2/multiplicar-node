const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve,reject) =>{

        if(!Number(base)){
            reject("El numero ingresado no es un numero");
            return;
        }
        
        let data ="";

        for( let i = 1; i <=limite; i++){
            data += `Resultado: ${base}x${i} = ${base*i} \n`;
        }


        fs.writeFile(`./tablas/tabla-${base}.txt`,data, (err) => {
            if (err) throw reject(err);
            else
                resolve(`Archivo creado - tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base,limite) => {

    return new Promise((resolve,reject) =>{

        if(!Number(base)){
            reject("El numero ingresado no es un numero");
            return;
        }
        
        let data ="";

        for( let i = 1; i <=limite; i++){
            data += `Resultado: ${base}x${i} = ${base*i} \n`;
        }
        
        if(data!=""){
            resolve(data);
            return;
        }
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}

