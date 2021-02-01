const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argv } = require('./config/yargs')
const colors = require('colors');
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch(comando) {

  case 'listar':
    console.log("Listar");
    listarTabla(argv.base,argv.limite).then(tabla => console.log(colors.green(tabla))).catch(e =>console.log(e));
    break;
  
  case 'crear':
    console.log('crear');
    crearArchivo(argv.base,argv.limite).then(archivo => console.log(archivo)).catch(e => console.log(e));
    break;
}



