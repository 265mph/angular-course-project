import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }

  ingChanged = new Subject<Ingredient[]>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Mangoes', 5),
    new Ingredient('Oranges', 6)
  ];

  getIng() {
    return this.ingredients.slice()
  }

  addIng(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingChanged.next(this.ingredients.slice())
  }

  addIngs(ings: Ingredient[]) {
    this.ingredients.push(...ings)
    this.ingChanged.next(this.ingredients.slice())
  }
}
