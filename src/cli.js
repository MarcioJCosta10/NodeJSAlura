import chalk from "chalk";
import fs from "fs";
import getFile from "./index.js";

const path = process.argv;

function printList(result,identifier='') {
  console.log(
    chalk.yellow(`Links list`),
    chalk.black.bgGreen(identifier),    
    result);
}

async function processText(argumentos) {
  const way = argumentos[2];
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
    printList(result);

  } else if (fs.lstatSync(way).isDirectory()) {
    const files = await fs.promises.readdir(way);
    files.forEach(async (element) => {
      const list = await getFile(`${way}/${element}`);
      printList(list, element);
    });
  }
}

processText(path);
