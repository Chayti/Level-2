"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
// object -> function -> method
const poorUser = {
    name: "Chayti",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
// ts in array map
const arr = [1, 4, 5];
const newArr = arr.map((elem) => elem * elem);
