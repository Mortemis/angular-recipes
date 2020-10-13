import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [new Ingredient('Фарш', 500), new Ingredient('Цветная капуста', 300)];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingrd: Ingredient): void {
        this.ingredients.push(ingrd);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingrds: Ingredient[]): void {
        this.ingredients.push(...ingrds);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}