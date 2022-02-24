export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // Clone da data, quando modificada muda a copia
        const data = new Date(this._data.getTime());
        return data;
    }
}
