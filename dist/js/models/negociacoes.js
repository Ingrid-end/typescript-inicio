// Vai guardar de maneira privada uma lista de negociações
export class Negociacoes {
    constructor() {
        // esse array é uma lista de negociações.
        // Dentro do < > vc coloca o tipo de dado, number, string e taus
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        // negociação faz um push para adicionar essa negociação dentro dela. 
        this.negociacoes.push(negociacao);
    }
    // //  nova referência, uma nova lista vazia na memória com os itens desta lista
    //  array que não disponibilize a remoção ou inclusão de novos items.
    lista() {
        return this.negociacoes;
    }
}
// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach( n= > {
//     n.
// })
