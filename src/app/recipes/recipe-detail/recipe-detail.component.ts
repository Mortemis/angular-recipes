import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.id = id;
      this.recipe = this.recipeService.getRecipes()[id];
    })
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngrsToShoppingList(this.recipe.ingredients);
  }

  onEdit(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
