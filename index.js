import fs from "fs";
import chalk from "chalk";
import { log } from "console";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretorio"));
}

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(filePath, encoding);
    console.log(chalk.green(texto));
  } catch (e) {
    trataErro(e);
  } finally{
    console.log(chalk.yellow("Operação concluída!"));
  }
}
// function getFile(filePath){
//     const encoding = 'utf-8'
//     fs.promises
//     .readFile(filePath, encoding,)
//     .then((texto)=>{console.log(chalk.green(texto))
//     .catch((trataErro))
//     })

// }

//getFile("./arquivos/texto.md");
getFile("./arquivos/");
