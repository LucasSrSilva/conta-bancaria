import rl = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    let loop: boolean = true;
    let opcao, numero, valor: number;


    const contas: ContaController = new ContaController();


    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 123, 1, "Robertinho", 1000, 1000));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 123, 2, "Vitinho", 1000, 10));



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

        console.log(colors.fg.green, "\nEntre com a opção desejada: ");
        opcao = rl.questionInt("");

        switch (opcao) {
            case 0: //sair
                console.log("Obrigado volte sempre! LuBank seu banco de sempre!");
                sobre();
                loop = false;
                break;
            case 1: //Criar Conta
                console.log(colors.fg.bluestrong, "\n*************************Criar Conta*************************\n", colors.reset);
                criarConta(contas);
                break;
            case 2: //listar Todas
                contas.listarTodas();
                break;
            case 3: //buscar
                console.log(colors.fg.bluestrong, "\n*************************Buscar Conta por numero*************************\n", colors.reset);
                console.log("Digite o número da conta: ");
                numero = rl.questionInt("");
                contas.procurarPorNumero(numero);
                break;
            case 4: //atualizar
                console.log(colors.fg.bluestrong, "\n*************************Atualizar conta*************************\n", colors.reset);
                let agencia, tipo, saldo, limite, aniversario: number;
                let titular: string;
                const tipoContas = ["Conta Corrente", "Conta Poupanca"];

                console.log("Digite o número da conta!")
                numero = rl.questionInt("");
                let conta = contas.buscarNoArray(numero);

                if (conta == null) { console.log("Conta não encontrada!\n"); return; };

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
                        contas.atualizar(
                            new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("\nDigite o dia do aniversario da conta: ");
                        aniversario = rl.questionInt("");
                        contas.atualizar(
                            new ContaCorrente(numero, agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
                break;
            case 5: //Deletar
                console.log(colors.fg.bluestrong, "\n*************************Deletar Conta*************************\n", colors.reset);
                console.log("Digite o número da conta: ");
                numero = rl.questionInt("");
                contas.deletar(numero);
                break;
            case 6: //sacar
                console.log(colors.fg.bluestrong, "\n*************************Sacar*************************\n", colors.reset);
                console.log("Digite o número da conta: ");
                numero = rl.questionInt("");
                console.log("Digite o valor do saque: ");
                valor = rl.questionFloat("");
                contas.sacar(numero, valor);
                break;
            case 7: //depositar
                console.log(colors.fg.bluestrong, "\n*************************Depositar*************************\n", colors.reset);
                console.log("Digite o número da conta: ");
                numero = rl.questionInt("");
                console.log("Digite o valor do deposito: ");
                valor = rl.questionFloat("");
                contas.depositar(numero, valor);
                break;
            case 8: //transferir
                let numeroDestino: number;
                console.log(colors.fg.bluestrong, "\n*************************Transferir*************************\n", colors.reset);
                console.log("Digite o número da conta origem: ");
                numero = rl.questionInt("");
                console.log("Digite o número da conta destino: ");
                numeroDestino = rl.questionInt("");
                console.log("Digite o valor da transferência: ");
                valor = rl.questionFloat("");
                contas.transferir(numero, numeroDestino, valor);
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