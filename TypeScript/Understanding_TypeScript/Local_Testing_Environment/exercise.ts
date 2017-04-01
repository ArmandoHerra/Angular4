type BankAccount = {money: number, deposit: (value: number) => number};

let myBankAccount: BankAccount = {
    money: 2000,
    deposit: function (value: number): number {
        return this.money += value;
    }
};

type person = {name: string, bankAccount: BankAccount, hobbies: string[]};

let myself: person = {
    name: "Armando",
    bankAccount: myBankAccount,
    hobbies: ["Programming", "Playing Videogames"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
