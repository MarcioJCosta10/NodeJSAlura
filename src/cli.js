import chalk from "chalk";
import getFile from "./index.js";
const path = process.argv[2]
async function processText(path){
return console.log(chalk.yellow('Links list'),await getFile(path) )
}
processText(path)

