import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

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



  constructor() { }

  ngOnInit(): void {
  }

  onAddBtnClick() {
    this.addBtnClicked.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));
  }

  // Нинада так делать, но как?
  onClearBtnClick() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
