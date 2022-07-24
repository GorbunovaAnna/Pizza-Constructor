export interface productType {
    name: string,
    value: number,
};

export type Base = {
    classical: productType,
    thin: productType,
    cheeseBoard: productType,
    hotDogBoard: productType
}& {
    [key: string]: any
}

export const base: Base = {
    classical: {
        name: 'Классика',
        value: 0,
    },
    thin: {
        name: 'Тонкая',
        value: 0,
    },
    cheeseBoard: {
        name: 'Сырный борт',
        value: 2,
    },
    hotDogBoard: {
        name: 'Xот-дог борт',
        value: 2,
    }
}

export type Sauce = {
    cheesy: productType,
    mustard: productType,
    barbecue: productType,
    sweetAndSour: productType
} & {
    [key: string]: any
}

export const sauce: Sauce = {
    cheesy: {
        name: 'Сырный',
        value: 3,
    },
    mustard: {
        name: 'Горчичный',
        value: 3,
    },
    barbecue: {
        name: 'Барбекю',
        value: 3,
    },
    sweetAndSour: {
        name: 'Кисло-сладкий',
        value: 3,
    }
}

export type Meat = {
    ham: productType,
    pepperoni: productType, 
    bavarianSausages: productType,
    bacon: productType
} & {
    [key: string]: any
}

export const meat: Meat = {
    ham: {
        name: 'Ветчина',
        value: 4,
    },
    pepperoni: {
        name: 'Пепперони',
        value: 3,
    },
    bavarianSausages: {
        name: 'Баварские колбаски',
        value: 3,
    },
    bacon: {
        name: 'Бекон',
        value: 4,
    }
}

export type Cheese = {
    mozzarella: productType,
    parmesan: productType,
    blueCheese: productType,
    cheddar: productType
} & {
    [key: string]: any
} 

export const cheese: Cheese = {
    mozzarella: {
        name: 'Моцарелла',
        value: 3,
    },
    parmesan: {
        name: 'Пармезан',
        value: 3,
    },
    blueCheese: {
        name: 'Голубой сыр',
        value: 5,
    },
    cheddar: {
        name: 'Чеддер',
        value: 5,
    }
}

export interface Ingredients{
    cheese: string[],
    meat: string[],
    sauce: string[],
    base: string[],
};

