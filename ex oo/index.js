import { ContaPoupanca } from "../aulaheranca-interfaces-oo/ContaPoupanca.js";
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",12345678910); // declaração de clientes
const contaCorrenteRicardo = new ContaCorrente(1234, cliente1); // declaração de contas
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(500);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1234);



console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
