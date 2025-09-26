import * as readline from 'readline';
import { DioAccount} from './DioAccount'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}
export class PremiumAccount extends DioAccount {

    constructor (name: string, accountNumber: number){
    super(name, accountNumber);
  }

    deposit = async (): Promise<void> => {
    if(this.validateStatus()){
      const valuein = await ask("Insira o valor desejado para deposito: ");
      const valor: number = Number(valuein);
      if (!isNaN(valor)) {
        this.setBalanceValue(this.getBalanceValue() + valor + 10);
        console.log(`Você depositou: ${valor}`);
      } else {
        console.log('Valor inválido!');
      }
    }
  }
}

