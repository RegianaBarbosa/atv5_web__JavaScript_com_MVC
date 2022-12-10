class Aluno {
    constructor(nome, frequencia, nota1, nota2, notaF){
        this._nome = nome;
        this._frequencia = frequencia;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._notaF = notaF;

        Object.freeze(this );
    }

    get nome(){
        return this._nome ;
    }  
    get frequencia(){
        return this._frequencia ;
    }  
    get nota1(){
        return this._nota1 ;
    }  
    get nota2(){
        return this._nota2 ;
    }  
    get notaF(){
        return this._notaF ;
    }  

    
    //calcular media
    getMediaParcial(){
        let mediaP = (this.nota1() + this.nota2())/2
        return mediaP;
    }

    //regra de negocio
    //Cálculo de Aprovação de alunos
    getSituacao(){
        const Situacao = ['Aprovado','Reprovado']
        let [ap,rep] = Situacao
        let freq = Number(this.frequencia)
        let media = this.getMediaParcial()

        //frequência mínima de 75%
        if (freq >= 75) {

            //se media menor que 30, reprovação direta
            if(media < 30){
                return rep

            } else 
            //Médias entre 30 (inclusive) e 70 (exclusive)
            if(media >= 30 && media < 70) {
                //aluno vai pra final
                let nFinal = this.notaF()
                if((nFinal + media) < 50){
                    return rep
                } else {
                    return ap
                }
            } else {
                // aprovacao
                return ap
            }
        } else {
            //reprovação direta
            return rep
        }
    }

    //mudar o css de acordo com a situação
    getCssSituacao(){
        const css = ['id="statusAp"','id="statusRep"']
        let [ap, rep] = css
        if(this.getSituacao() == 'Aprovado'){
            return ap
        }else {
            return rep
        }
    }
}