import rl = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    let loop: boolean = true;
    let opcao, numero: number;


    const contas: ContaController = new ContaController();


    const cc1: ContaCorrente = new ContaCorrente(2, 123, 1, "Robertinho", 15076, 1000);
    const cp1: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Vitinho", 1000, 10);



    console.log(colors.fg.green);
    console.log("*************************************************************");
    console.log("                                                             ");
    console.log("                           LuBank                            ");
    console.log("                                                             ");
    console.log("*************************************************************");
    console.log("                                                             ");
    console.log("                1 - Cria Conta                               ");
    console.log("                2 - Listar todas as Contas                   ");
    console.log("                3 - Buscar Conta por Numero                  ");
    console.log("                4 - Atualizar Dados da conta                 ");
    console.log("                5 - Apagar conta                             ");
    console.log("                6 - Sacar                                    ");
    console.log("                7 - Depositar                                ");
    console.log("                8 - Transferir valores entre Contas          ");
    console.log("                0 - Sair                                     ");
    console.log("                                                             ");
    console.log("*************************************************************");
    console.log("                                                             ");
    console.log(colors.reset);
    while (loop) {

        console.log(colors.fg.blue, "Entre com a opção desejada: ");
        opcao = rl.questionInt("");

        switch (opcao) {
            case 0:
                console.log("Obrigado volte sempre! LuBank seu banco de sempre!");
                sobre();
                loop = false;
                break;
            case 1:
                console.log(colors.fg.bluestrong, "\n*************************Criar Conta*************************\n", colors.reset);
                criarConta(contas);
                break;
            case 2:
                contas.listarTodas();
                break;
            case 3:
                console.log(colors.fg.bluestrong, "\n*************************Buscar Conta por numero*************************\n", colors.reset);
                console.log("Digite o número da conta: ");
                numero = rl.questionInt("");
                contas.procurarPorNumero(numero);
                break;
            case 4:
                console.log("\nAtualizar conta\n");
                break;
            case 5:
                console.log("\nApagar conta\n");
                break;
            case 6:
                console.log("\nSacar\n");
                break;
            case 7:
                console.log("\nDepositar\n");
                break;
            case 7:
                console.log("\nDepositar\n");
                break;
            case 8:
                console.log("\nTrasferir\n");
                break;
            default:
                console.log("\nOpção inválida! Tente novamente\n");
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*************************************************************");
    console.log("   Projeto desenvolvido por: Lucas Souza Ribeiro da Silva      ");
    console.log("               lucasouzaribeiro12345@gmail.com                 ");
    console.log("               https://github.com/LucasSrSilva/                ");
    console.log("***************************************************************");
}

export function criarConta(contas: ContaController): void {
    let agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ["Conta Corrente", "Conta Poupanca"];

    console.log("Digite o número da agência: ");
    agencia = rl.questionInt("");
    console.log("\nDigite o nome do Titular da conta: ");
    titular = rl.question("");
    console.log("\nSelecione o tipo de conta: ");
    tipo = rl.keyInSelect(tipoContas, "", { cancel: false }) + 1;
    console.log("\nDigite o saldo da conta: ");
    saldo = rl.questionFloat("");

    switch (tipo) {
        case 1:
            console.log("\nDigite o limite da conta: ");
            limite = rl.questionFloat("");
            contas.cadastrar(
                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
            )
            break;
        case 2:
            console.log("\nDigite o dia do aniversario da conta: ");
            aniversario = rl.questionInt("");
            contas.cadastrar(
                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
            )
            break;
    }

    console.log(colors.fg.bluestrong, "\n*************************Conta criada com sucesso!*************************\n\n", colors.reset)
}

main()