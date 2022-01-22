const alunos = ['João','Juliana','Caio','Ana'];
const medias = [10,7,9,6];

let listaDeNotasEAlunos = [alunos, medias];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno não cadastrado'
    }
}

console.log(exibeNomeNota("caco"));