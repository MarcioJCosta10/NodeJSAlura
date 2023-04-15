 function extractLinks(arrLinks){
    //Object.values extract value and return an array
    //join() extract value in array and return an string
     return  arrLinks.map((objectLink)=> Object.values(objectLink).join())
}

async function checkUrl(listValidate){
    //Promise.all() recebe uma lista de promise resolve e retornar uma lista
    const arrStatus = await Promise
    .all(
        listValidate.map(async (url) => {
            const response = await fetch(url)
            return response.status
        })
    )
    return arrStatus    
}

export default async function listValidate(listLinks){    
    const links =  extractLinks(listLinks)
    const status = await checkUrl(links)
    return status
}

