{
    // interface

    type User1 = { //type
        name: string;
        age: number;
    }

    type UserWithRole = User1 & { role: string } // primitive types can be only be type defined 

    interface User2 { // interface only works for object
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 { // interface can extend both type and interface
        role: string;
    }

    let user: UserWithRole | UserWithRole2 = {
        name: 'Chayti',
        age: 30,
        role: 'Moderator'
    }

    //array is an obj, function is an obj, so their type can be declared with interface
    // array
    type roll1 = number[];

    interface roll2 {
        [index: number]: number;
    }

    const rollNumber: roll1 | roll2 = [1, 2, 3]

    // function
    type Add1 = (num1: number, num2: number) => number

    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add1 | Add2 = (num1, num2) => num1 + num2;



    // 

}