{
    // generics type => if we can create and use types according to our necessity in dynamic way, it's called generics type

    // type GenericArray<param> = Array<param> 
    type GenericArray<t> = Array<t>

    // const roll: number[] = [1, 2, 3];
    // const roll: Array<number> = [1, 2, 3];
    const roll: GenericArray<number> = [1, 2, 3];

    // const mentors: string[] = ['x', 'y', 'z'];
    // const mentors: Array<string> = ['x', 'y', 'z'];
    const mentors: GenericArray<string> = ['x', 'y', 'z'];

    // const bool: boolean[] = [true, false, true];
    // const bool: Array<boolean> = [true, false, true]; 
    const bool: GenericArray<boolean> = [true, false, true];

    // Generic Array of object
    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'x',
            age: 100
        },
        {
            name: 'y',
            age: 200
        }
    ]

    // generic tuple
    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ['x', 'Y']

    const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'x', email: 'g@gmail.com' }]


    // 
}