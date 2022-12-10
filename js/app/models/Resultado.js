class Resultado {
    constructor() {
        this._alunos = []
    }

    adiciona(aluno){
        this._alunos.push(aluno);
    }

    getAlunos(){
        return this._alunos;
    }

    getResultados(){
        return [].concat(this._alunos);
    }

    getAprovados(){
        let contAp = 0
        const results = this.getResultados()
        for(let i=0;i<results.length;i++){
            if(results[i].aluno.getSituacao() === 'Aprovado'){
                contAp++
            }
        }
        return contAp
    }

    getReprovados(){        
        let contRep = 0
        const results = this.getResultados()
        for(let i=0;i<results.length;i++){
            if(results[i].aluno.getSituacao() === 'Reprovado'){
                contRep++
            }
        }
        return contRep
    }

    getMediaGeral(){
        let mediaGeral = 0;
        let contAlunos = 0;
        let somaNotas = 0; 
        
        const results = this.getResultados()
        //contador da quantidade de alunos
        for(let i=0;i<results.length;i++){
            contAlunos += (results[i].aluno)
        }
        
        //somatório das médias finais de cada aluno
        for(let i=0;i<results.length;i++){
            //caso aprovado, soma a média parcial
            if (results[i].aluno.getSituacao() == "Aprovado") {
                somaNotas += results[i].aluno.getMediaParcial()
            } else {
                //caso reprovado, soma a nota da prova final
                if (results[i].aluno.getSituacao() == "Reprovado") {
                    somaNotas += results[i].aluno.notaF()
                }
            }
            
        }
        mediaGeral = somaNotas / contAlunos;
        return mediaGeral
    }

}