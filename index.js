import fs from "fs";
import chalk from "chalk";
import { log } from "console";

function extractLinks(texto) {
  const regex = /\[(.*?)\]\((.*?)\)/gm;
  // ... operador de espalhamento (spread operator )
  const captures = [...texto.matchAll(regex)];
  const results = captures.map((capture) => ({[capture[1]]:capture[2]}));
  return results
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretorio"));
}

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(filePath, encoding);
    const links = extractLinks(texto);
    console.log(links);
  } catch (e) {
    trataErro(e);
  } finally {
    console.log(chalk.yellow("Operação concluída!"));
  }
}

getFile("./arquivos/texto.md");

