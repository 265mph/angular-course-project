import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() ingredientDeets = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') ingName!: ElementRef;
  @ViewChild('amountInput') ingAmount!: ElementRef;

  addIng() {
    const ingName = this.ingName.nativeElement.value;
    const ingAmount = this.ingAmount.nativeElement.value;
    const newIngredient = new Ingredient (ingName, ingAmount)
    this.ingredientDeets.emit(newIngredient)
  }
}
