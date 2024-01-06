{
    // function with generics
    // Array
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('BD')
    const res2 = createArrayWithGeneric<boolean>(true)
    const res3 = createArrayWithGeneric<{ name: string, age: number }>({ name: 'x', age: 56 })

    // Tuple
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res4 = createArrayWithTuple<string, number>('BD', 23);
    // 
}