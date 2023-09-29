const fs = require('fs').promises

async function Arquivos(diretorio, arquivos) {

    if(!arquivos)
        arquivos = []

    let listaDeArquivos = await fs.readdir(diretorio)

    for(let k in Arquivos) {
        fs.stat = await fs.stat(diretorio + '/' + listaDeArquivos[k])
        if(stat.isDirectory())
            await Arquivos(diretorio + '/' + listaDeArquivos[k], arquivos)
        arquivos.push()
    }

    return arquivos

}

async function test(){
    let arquivos = await Arquivos('./arquivos')
    console.log(arquivos)
}

test()

