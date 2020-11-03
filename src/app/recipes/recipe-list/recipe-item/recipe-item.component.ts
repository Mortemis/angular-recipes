import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;

  @Input()
  id: number;

  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onRecipeClicked() {
    // this.recipeService.recipeSelected.emit(this.recipe);
    // this.router.navigate([this.id], {relativeTo: this.route});
  }

}
