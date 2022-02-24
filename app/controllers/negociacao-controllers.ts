import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor:HTMLInputElement;
    // TypeScript infere que negociações são do tipo negociações.
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona():void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        // Por causa do ReadonlyArray o metodo pop ta dando erro, pois não pode apagar a lista de leitura
        // this.negociacoes.lista().pop();
        
        //  método lista para eu atualmente saber quantas negociações tem lá dentro.
        console.log(this.negociacoes.lista());
        this.limparFormularios();
   
    }
    //  tipar os retornos, os métodos
    criaNegociacao(): Negociacao{
    // exp: sub todos os - po , (g=global)
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
     return new Negociacao(date, quantidade, valor);
    }

    limparFormularios():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}