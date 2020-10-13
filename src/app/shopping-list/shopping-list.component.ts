import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  

  constructor(private shopListService: ShoppingListService) { 
    shopListService.ingredientsChanged.subscribe((ingrs: Ingredient[]) => {
      this.ingredients = ingrs;
    });
  }

  ngOnInit(): void {
    this.ingredients = this.shopListService.getIngredients();
  }




}
