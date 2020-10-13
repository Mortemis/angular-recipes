import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output()
  addBtnClicked = new EventEmitter<Ingredient>();
  @Output()
  delBtnClicked = new EventEmitter<void>();
  @Output()
  clrBtnClicked = new EventEmitter<void>();

  @ViewChild("nameInput", { static: true })
  nameInput: ElementRef;

  @ViewChild("amountInput", { static: true })
  amountInput: ElementRef;



  constructor(private shopListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddBtnClick() {
    this.shopListService.addIngredient(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));
  }

  // Don't do this pls anymore
  onClearBtnClick() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
