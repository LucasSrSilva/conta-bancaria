import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

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
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.bluestrong ,"\n\nA conta foi atualizada!!\n\n", colors.reset)
        }
        else {
            console.log(`\n\nA conta não foi encontrada\n\n`)
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.bluestrong ,"\n\nConta Deletada!!\n\n", colors.reset)
        }
        else {
            console.log(`\n\nA conta com o número ${numero} não foi encontrada\n\n`)
        }
    }
    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            if(buscaConta.sacar(valor) === true){
                console.log(colors.fg.bluestrong ,"\n\nA Saque efetuado!!\n\n", colors.reset)
            }
        }
        else {
            console.log(`\n\nA conta não foi encontrada\n\n`)
        }
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
                buscaConta.depositar(valor);
                console.log(colors.fg.bluestrong ,"\n\nA Deposito efetuado!!\n\n", colors.reset)    
        }
        else {
            console.log(`\n\nA conta não foi encontrada\n\n`)
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem != null && buscaContaDestino != null) {
            if(buscaContaOrigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);
                console.log("\n\nTranferencia Executada com sucesso!!\n\n")
            }
        }
        else{
            console.log(`\n\nA conta não foi encontrada\n\n`)
        }
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