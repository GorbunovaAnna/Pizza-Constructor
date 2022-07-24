import { base, cheese, Ingredients, meat, sauce } from "./data.js";
import { ingredients, orderPizza } from "./index.js";
import { addIngredients } from "./logics.js";
import {baseSpan, meatSpan, sauceSpan, cheeseSpan, topLeftImgPizza, topRightImgPizza, bottomLeftImgPizza, bottomRightImgPizza, button, priceSpan, body, form} from './variables.js';

export function writeIngredients (ingredients: Ingredients): void {
    baseSpan.textContent = base[ingredients.base[0]]?.name;
    sauceSpan.textContent = sauce[ingredients.sauce[0]]?.name;
    meatSpan.textContent = `${meat[ingredients.meat[0]]?.name || ''} ${meat[ingredients.meat[1]]?.name || ''}`; 
    cheeseSpan.textContent = `${cheese[ingredients.cheese[0]]?.name || ''} ${cheese[ingredients.cheese[1]]?.name || ''}`;  
}

export function drawPizza (ingredients: Ingredients): void {
    if (ingredients.base.length) {
        topLeftImgPizza.classList.remove('hider');
    } 
    if (ingredients.sauce.length) {
        topRightImgPizza.classList.remove('hider');
    }
    if (ingredients.meat.length) {
        bottomLeftImgPizza.classList.remove('hider');
    } else {
        bottomLeftImgPizza.classList.add('hider');
    }
    if (ingredients.cheese.length) {
        bottomRightImgPizza.classList.remove('hider');
    } else {
        bottomRightImgPizza.classList.add('hider');
    }
}

export function turnOnTheButton (ingredients: Ingredients): void {
    const res = Object.keys(ingredients).every((key)=>{
        return ingredients[key as keyof Ingredients].length;
    });
    if (res) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'true');
    }
}

export function showPrice (price: number): void {
    priceSpan.textContent = String(price) + '$';
}

export function showPopUp (): void {
    const divLayer = document.createElement('div');
    divLayer.classList.add('layer');
    body.prepend(divLayer);

    const divPopAp = document.createElement('div');
    divPopAp.classList.add('pop-up-content');
    divLayer.append(divPopAp);

    const p = document.createElement('p');
    p.textContent = 'Ваш заказ принят, ожидайте доставку. Спасибо, что выбрали нас! Приятного аппетита!';
    p.classList.add('p-pop-up');
    divPopAp.append(p);
    showObjectInConsole();
    const close = document.createElement('button');
    close.textContent = 'X';
    close.classList.add('close');
    divPopAp.append(close);
    removeListeners();
    close.addEventListener('click', closeModal, {once: true});
}

function closeModal():void{
    const el = document.querySelector('.layer');
    el?.remove();
    restartOrder();
}

function removeListeners(): void{
    form.removeEventListener('change', addIngredients);
    button.removeEventListener('click', showPopUp);
}

function restartOrder(): void {
    Object.keys(ingredients).forEach((key) => {
        ingredients[key as keyof Ingredients] = [];
    });
    document.querySelectorAll('input').forEach((el) => { el.checked = false; })
    const priceSpan = document.querySelector('.order__price')!;
    priceSpan.textContent = '';
    const choiceValue = document.querySelectorAll('.choice-value').forEach(el => el.textContent = '');
    document.querySelector('.order__visualization-area')?.querySelectorAll('div').forEach(el => el.classList.add('hider'));
    document.querySelector('.order__btn')?.querySelector('.btn')?.setAttribute('disabled', 'true');
    orderPizza();
}

export function showObjectInConsole ():void {
    const orderObject: {
        base: string,
        sauce: string,
        meat: string,
        cheese: string,
    } = {
        'base': base[ingredients.base[0]]?.name,
        'sauce': sauce[ingredients.sauce[0]]?.name,
        'meat': `${meat[ingredients.meat[0]]?.name || ''} ${meat[ingredients.meat[1]]?.name || ''}`,
        'cheese': `${cheese[ingredients.cheese[0]]?.name || ''} ${cheese[ingredients.cheese[1]]?.name || ''}`
    }
    console.log(orderObject);
}