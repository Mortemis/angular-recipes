import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Тефтели', 'Очень вкусные тефтели', 'https://static.1000.menu/img/content/20035/postnye-tefteli-s-gribami-i-risom_1492410827_1_max.jpg'),
    new Recipe('Тефтели', 'Очень вкусные тефтели', 'https://static.1000.menu/img/content/20035/postnye-tefteli-s-gribami-i-risom_1492410827_1_max.jpg')
  ];

  @Output()
  recipeEvent = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }


}
