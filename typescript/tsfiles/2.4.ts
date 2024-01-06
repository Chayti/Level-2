{
    // Generic with interface

    interface Developer<T, X> {
        name: string;
        computer: {
            brand: string;
            model: string;
            release: number;
        },
        smartWatch: T;
        bike?: X;
    }

    type smartWatch = {
        brand: string,
        model: string,
        display?: string,
        heartTrack?: boolean,
        sleepTrack?: boolean;
    }

    const poorDev: Developer<smartWatch, null> = {
        name: 'X',
        computer: {
            brand: 'x',
            model: 'y',
            release: 23
        },
        smartWatch: {
            brand: 'x',
            model: 'y',
            display: 'z'
        }
    }

    const richDev: Developer<smartWatch, { brand: string }> = {
        name: 'X',
        computer: {
            brand: 'x',
            model: 'y',
            release: 23
        },
        smartWatch: {
            brand: 'x',
            model: 'y',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: 'hunda'
        }
    }



    // 
}