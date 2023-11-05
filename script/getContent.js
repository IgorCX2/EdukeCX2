import fs from "fs";
import grayMatter from 'gray-matter';
export function getContents(materia, plano){
    var metaData = ""
    var conteudo = ""
    try{
        const arquivo = `planosEstudos/${materia}/${plano[0]}.md`
        const conteudo = fs.readFileSync(arquivo, "utf-8")
        const { content, data: metadata } = grayMatter(conteudo);
        var metaData = metadata
        var conteudo = content
    }catch(error){
        metaData = "ERRO"
        conteudo = "ERRO"
    }
    return{
        metaData,
        conteudo
    }
}