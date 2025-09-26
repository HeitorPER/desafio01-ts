import { DioAccount } from "./DioAccount"
import {rl} from "./DioAccount"

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = async (): Promise<void> => {
    if(this.validateStatus()){
       const valuein = await ask("Insira o valor desejado para emprestimo: ");
      const valor: number = Number(valuein);
      if (!isNaN(valor)) {
        this.setBalanceValue(this.getBalanceValue() + valor);
        console.log(`Você pegou um emprestimo de: ${valor}`);
      } else {
        console.log('Valor inválido!');
      }
    }
  }
}
