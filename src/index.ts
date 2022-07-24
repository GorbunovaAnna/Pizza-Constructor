import { Ingredients } from './data';
import { addIngredients } from "./logics.js";
import { form, button } from "./variables.js";
import { showPopUp, showObjectInConsole} from "./workWithDOM.js";

export const ingredients: Ingredients = {
    meat: new Array<string>,
    cheese: new Array<string>,
    sauce: new Array<string>,
    base: new Array<string>
};


export function orderPizza(): void {
    form.addEventListener('change', addIngredients);
    button.addEventListener('click', showPopUp);    
} 
orderPizza();








