import rl = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
    let loop: boolean = true;
    let opcao: number;

    const c1: Conta = new Conta(1234, 111, 1, "Julia", 10012000.00);
    const c2: Conta = new Conta(4123, 222, 2, "Everton", 10);

    
    c1.vizualizar();
    c2.vizualizar();

    c1.sacar(10400);
    console.log(`\n\nSaldo da conta do(a) ${c1.titular}: ` + c1.saldo);
    c2.sacar(20);

    c2.depositar(100044300.123);
    console.log(`Saldo da conta do(a) ${c2.titular}: ` + c2.saldo);

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
                console.log("\nCriar conta\n");
                break;
            case 2:
                console.log("\nListar todas as contas\n");
                break;
            case 3:
                console.log("Biscar Conta por numero");
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

main()