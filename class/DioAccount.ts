import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = async (): Promise<void> => {
    if(this.validateStatus()){
      const valuein = await ask("Insira o valor desejado para deposito: ");
      const valor: number = Number(valuein);
      if (!isNaN(valor)) {
        this.balance += valor;
        console.log(`Você depositou: ${valor}`);
      } else {
        console.log('Valor inválido!');
      }
    }
  }

  withdraw = async (): Promise<void> => {
    if(this.validateStatus()){
      const valueout = await ask("Insira o valor desejado para saque: ");
      const valor: number = Number(valueout);
      if (!isNaN(valor)) {
        this.balance -= valor;
        console.log(`Você sacou: ${valor}`);
      } else {
        console.log('Valor inválido!');
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected getBalanceValue(): number {
    return this.balance;
  }

  protected setBalanceValue(value: number): void {
    this.balance = value;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

export { rl }
