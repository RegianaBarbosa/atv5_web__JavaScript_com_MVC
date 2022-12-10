class ResultadoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputNome = $('#inputNome');
        this._inputFreq = $('#inputFreq');
        this._inputNota1 = $('#inputN1');
        this._inputNota2 = $('#inputN2');
        this._inputNotaPfinal = $('#inputProvaF');

        //model
        this._resultado = new Resultado();
        
        //view
        this._resultadoView = new ResultadoView($('#js-resultadoView'));
        this._resultadoView.update(this._resultado );

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );
    }

    adiciona(e ) {
            
        e.preventDefault();

        let aluno = this._criaAluno();
        this._resultado.adiciona(aluno ); 
        this._resultadoView.update(this._resultado );

        this._limpaFormulario();
        console.log(this._resultado.alunos)

        this._mensagem.texto = `Os Resultados de ${aluno.nome} foram adicionado com sucesso.`;
        this._mensagemView.update(this._mensagem );
    }

    _criaAluno() {
        return new Aluno(
            this._inputNome.value,
            this._inputFreq.value,
            this._inputNota1.value,
            this._inputNota2.value,
            this._inputNotaPfinal.value
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputFreq.value = 0;
        this._inputNota1.value = 0;
        this._inputNota2.value = 0;
        this._inputNotaPfinal.value = 0;

        this._inputNome.focus();
    }

}