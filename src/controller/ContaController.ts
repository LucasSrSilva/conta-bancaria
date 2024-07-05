import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>;

    public numero: number = 0;

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("Conta cadastrada com sucesso!");
    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        }
        else {
            console.log(`A conta com o número ${numero} não foi encontrada`)
        }
    }
    atualizar(conta: Conta): void {

    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}