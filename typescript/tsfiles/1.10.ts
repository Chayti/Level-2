{

    // type declare
    type FrontEndDev = 'fakibaz' | 'serious' //string literal type
    type FullStackDev = 'frontend' | 'expert' //string literal type

    type dev = FrontEndDev | FullStackDev //union type

    const newDev: dev = 'fakibaz'

    type User = {
        name: string;
        email: string;
        gender?: "male" | "female" | "others"; //optional 
    }

    const user1: User = {
        name: "Mou",
        email: "mou@gmail.com"
    }


    // intersactyion type

    type FrontEndDeveloper = {
        skills: string[];
        designation1: 'FrontEnd Dev';
    }

    type BackEndDeveloper = {
        skills: string[];
        designation2: 'BackEnd Dev';
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['html', 'css'],
        designation1: 'FrontEnd Dev',
        designation2: 'BackEnd Dev'
    }

}