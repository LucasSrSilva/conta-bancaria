import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    private _limite: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number ,limite: number) {
        super(numero, agencia, tipo, titular, saldo);
		this._limite = limite;
	}


	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}

    public sacar(valor: number): boolean {
        if((this._limite + this.saldo) >= valor){
            this.saldo -= valor;
            return true;
        }
        console.log("Saldo e limite unsuficiente!");
        return false;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`)
    }
}