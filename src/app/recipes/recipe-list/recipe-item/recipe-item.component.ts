import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;

  @Output()
  onRecipeClick = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked() {
    this.onRecipeClick.emit();
  }

}
