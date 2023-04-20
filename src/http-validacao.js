import chalk from "chalk";

function extractLinks(arrLinks) {
  //Object.values extract value and return an array
  //join() extract value in array and return an string
  return arrLinks.map((objectLink) => Object.values(objectLink).join());
}

async function checkUrl(listValidate) {
  //Promise.all() recebe uma lista de promise resolve e retornar uma lista
  const arrStatus = await Promise.all(
    listValidate.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;
      } catch (e) {
        return manejaErros(e)
      }
    })
  );
  return arrStatus;
}

function manejaErros(erro) {
  if (erro.cause.code === "ENOTFOUND"){
    return "link não encontrado"
  }else{
    return 'ocorreu um erro'
  }
}

export default async function listValidate(listLinks) {
  const links = extractLinks(listLinks);
  const status = await checkUrl(links);
  // para o mao retornar um objeto pelo map usamos os parentes englobando as chaves
  return listLinks.map((objeto, index) => ({
    ...objeto,
    status: status[index],
  }));
}
