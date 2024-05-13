import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingName!: ElementRef;
  @ViewChild('amountInput') ingAmount!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIng() {
    const ingName = this.ingName.nativeElement.value;
    const ingAmount = this.ingAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addIng(newIngredient)
  }
}
