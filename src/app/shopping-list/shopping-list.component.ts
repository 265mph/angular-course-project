import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Mangoes', 50),
    new Ingredient('Oranges', 60)
  ];

  ingredientData(ingInfo: Ingredient) {
    this.ingredients.push(ingInfo)
  }
}
