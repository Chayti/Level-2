function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2

// object -> function -> method
const poorUser = {
    name: "Chayti",
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
}

// ts in array map
const arr: number[] = [1, 4, 5]
const newArr = arr.map((elem: number): number => elem * elem)