const numerosPares = [2,4,6]
const  numeroImpares = [1,3,5]

const numeros = [...numerosPares, ...numeroImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

const [nome1 = 'Ju'] = [1]

const pessoa = {
    'nome' : 'Ju',
    'idade':25
}

const pessoaComTelefone = {...pessoa, telefone: 123456}

const { nome, idade } = pessoa

function imprimeDados(dados){
    const {nome, idade} = dados
    console.log(nome, idade);
}

function imprimeDados2({nome, idade}){
    console.log(nome, idade);
}

imprimeDados(pessoa)
imprimeDados2(pessoa)
