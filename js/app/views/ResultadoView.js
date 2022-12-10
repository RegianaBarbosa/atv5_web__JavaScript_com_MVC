class ResultadoView extends View {

    constructor(elemento) {
        super(elemento );
        this._elemento = elemento;
    }

    _template(resultado ) {
        return `
            <table class="table table-striped table-bordered custom-table">
                <thead>
                    <tr>
                        <th scope="col">ALUNO</th>
                        <th scope="col">FREQUÊNCIA</th>
                        <th scope="col">NOTA 1</th>
                        <th scope="col">NOTA 2</th>
                        <th scope="col">MÉDIA PARCIAL</th>
                        <th scope="col">PROVA FINAL</th>
                        <th scope="col">MÉDIA FINAL</th>
                        <th scope="col">SITUAÇÃO</th>
                    </tr>
                </thead>
            
                <tbody>
                    ${resultado.getAlunos().map(aluno => `
                        
                        <tr>
                            <td>${aluno.nome}</td>
                            <td>${aluno.frequencia} %</td>
                            <td>${aluno.nota1}</td>
                            <td>${aluno.nota2}</td>
                            <td>${aluno.notaF}</td>
                            <td ${aluno.getCssSituacao()}>${aluno.getSituacao()}</td>
                        </tr>
                        
                    `).join('')}                
                </tbody>

                <tfoot>
                    <td colspan="3" class= "text-center">
                        Aprovados = ${resultado.getAprovados()}
                    </td>
                    <td colspan="3" class= "text-center">
                        Reprovados = ${resultado.getReprovados()}
                    </td>
                    <td colspan="3" class= "text-center">
                        Média Geral = ${resultado.getMediaGeral()}
                    </td>
                </tfoot>
                
            </table>
        `;
    }
    
    update(resultado ) {
        document.getElementById(this._elemento).innerHTML = this._template(resultado );
    }
}