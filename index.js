import fs from 'fs'
import chalk from "chalk"
import { log } from 'console'

function trataErro(erro){
    console.log(erro);
throw new Error(chalk.red(erro.code, 'Não há arquivo no diretorio'))
}

function getFil(filePath){
    const encoding = 'utf-8'
    fs.promises
    .readFile(filePath, encoding,)
    .then((texto)=>{console.log(chalk.green(texto))
    .catch((trataErro))
    })

}
// function getFile(filePath){
//     const encoding = 'utf-8'
//     //para desconsiderar o primeiro parametro da função usamos o _ (_, texto)
//     fs.readFile(filePath,encoding,(erro, texto)=>{

//         if(erro){
//             trataErro(erro)
//         }

//         console.log(chalk.green(texto))
//     })
// }

getFile('./arquivos/')