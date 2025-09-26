import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'
import {rl} from "./class/DioAccount"

async function main() {
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
await peopleAccount.deposit()
console.log(peopleAccount)
await peopleAccount.withdraw()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
await companyAccount.deposit()
console.log(companyAccount)
await companyAccount.getLoan()
console.log(companyAccount)

const premiumAccount: PremiumAccount = new PremiumAccount('Jonh', 7)
await premiumAccount.deposit();
console.log(premiumAccount);

rl.close()
}

main()