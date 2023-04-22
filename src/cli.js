import chalk from "chalk";
import fs from "fs";
import getFile from "./index.js";

import listValidate from "./http-validacao.js";

const path = process.argv;

async function printList(validate, result,identifier='') {
    if(validate){
        console.log(
            chalk.yellow(`List validate`),
            chalk.black.bgGreen(identifier),    
            await listValidate(result)
            
            );

    }else {
        console.log(
            chalk.yellow(`Links list`),
            chalk.black.bgGreen(identifier),    
            result)
    }
  
}

async function processText(argumentos) {
  const way = argumentos[2];
  
  //const valida = argumentos[3] === '--valida';
  const valida = argumentos[3] === 'valida';
  try{
    fs.lstatSync(way)
  }catch(e){
    if(e.code == "ENOENT"){
        console.log('Arquivo não existe.');
        return;
    }
  }
  
  //verify if the argument is directory or file
  if (fs.lstatSync(way).isFile()) {
    const result = await getFile(way);
    printList(valida,result);

  } else if (fs.lstatSync(way).isDirectory()) {
    const files = await fs.promises.readdir(way);
    files.forEach(async (element) => {
      const list = await getFile(`${way}/${element}`);
      printList(valida, list, element);
    });
  }
}

processText(path);
