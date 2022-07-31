const alunos = [
    {
        nome: 'Midoriya',
        nota: 9,
        turma: '1A',
    },

    {
        nome: 'Ochaco',
        nota: '8',
        turma: '1A',
    },

    {
        nome: 'Shinso',
        nota: 9,
        turma: '2A',
    },

    {
        nome: 'Kaminari',
        nota: 7,
        turma: '1A',
    },

    {
        nome: 'Mineta',
        nota: 5,
        turma: '1A',
    },
]
function alunosAprovados (array, media ){
    let aprovados = [];

    for (let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}

console.log(alunosAprovados(alunos, 7));