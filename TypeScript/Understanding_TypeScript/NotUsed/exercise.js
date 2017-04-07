var myBankAccount = {
    money: 2000,
    deposit: function (value) {
        return this.money += value;
    }
};
var myself = {
    name: "Armando",
    bankAccount: myBankAccount,
    hobbies: ["Programming", "Playing Videogames"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=exercise.js.map