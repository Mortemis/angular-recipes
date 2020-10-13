import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('Тефтели',
            'Очень вкусные тефтели.',
            'https://static.1000.menu/img/content/20035/postnye-tefteli-s-gribami-i-risom_1492410827_1_max.jpg',
            [
                new Ingredient('Фарш', 500),
                new Ingredient('Цветная капуста', 500),
                new Ingredient('Рис', 200)
            ]),
        new Recipe('Борщ',
            'Сладкий. Страстный. Дикий.',
            'https://static.1000.menu/img/content/20678/borshch-s-fasolu_1496088990_21_max.jpg',
            [
                new Ingredient('Капуста', 1000),
                new Ingredient('Картоха', 500),
                new Ingredient('Свёкла', 150),
                new Ingredient('Лук', 100)
            ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shopListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); // Clone array
    }

    addIngrsToShoppingList(ingrs: Ingredient[]) {
        this.shopListService.addIngredients(ingrs);
    }


}