import { base, cheese, Ingredients, meat, sauce } from './data.js';
import { showPrice, writeIngredients, drawPizza, turnOnTheButton } from './workWithDOM.js';
import { ingredients } from './index.js';

export function addIngredients(e: Event) {
    if (e.target === null) {
        return;
    }
    const value: string = (e.target as HTMLInputElement).value;
    const name: string = (e.target as HTMLInputElement).name;
    const isChecked: boolean = (e.target as HTMLInputElement).checked;

    if (name === 'meat' || name === 'cheese') {
        if (ingredients[name].length >= 2 && isChecked === true) {
            (e.target as HTMLInputElement).checked = false;
            return;
        }
        if (isChecked === true) {
            ingredients[name].push(value);
        } else {
            const idx = ingredients[name].indexOf(value);
            if (idx != -1) {
                ingredients[name].splice(idx, 1);
            }
        }
    } else if (name === 'sauce' || name === 'base') {
        ingredients[name][0] = value;
    }

    writeIngredients(ingredients);
    drawPizza(ingredients);
    turnOnTheButton(ingredients);
    calculatePrice(ingredients);
}

export function calculatePrice(ingredients: Ingredients): void {
    const basePrice: number = base[ingredients.base[0]]?.value;
    const saucePrice: number = sauce[ingredients.sauce[0]]?.value;
    const meatPrice: number = (meat[ingredients.meat[0]]?.value || 0) + (meat[ingredients.meat[1]]?.value || 0);
    const cheesePrice: number = (cheese[ingredients.cheese[0]]?.value || 0) + (cheese[ingredients.cheese[1]]?.value || 0);

    const price: number = (basePrice || 0) + (saucePrice || 0) + (meatPrice || 0) + (cheesePrice || 0);

    showPrice(price);
}


