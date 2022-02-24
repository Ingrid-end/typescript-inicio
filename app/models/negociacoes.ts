import { Negociacao } from "./negociacao.js";

    // Vai guardar de maneira privada uma lista de negociações
export class Negociacoes{
    // esse array é uma lista de negociações.
    // Dentro do < > vc coloca o tipo de dado, number, string e taus
private negociacoes:Array <Negociacao> =[];

 adiciona(negociacao:Negociacao){
// negociação faz um push para adicionar essa negociação dentro dela. 
    this.negociacoes.push(negociacao);
 }

 // //  nova referência, uma nova lista vazia na memória com os itens desta lista
//  array que não disponibilize a remoção ou inclusão de novos items.
        lista():ReadonlyArray<Negociacao>{
            return this.negociacoes;
        }
}

// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach( n= > {
//     n.
// })