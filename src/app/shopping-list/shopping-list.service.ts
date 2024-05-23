import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  editingIng = new Subject<number>()

  constructor() { }
  
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

  getEditIng(index: number) {
    return this.ingredients[index]
  }

  updateIng(index: number, updatedIng: Ingredient) {
    this.ingredients[index] = updatedIng;
    this.ingChanged.next(this.ingredients.slice())
  }

  deleteIng(index: number){
    this.ingredients.splice(index, 1);
    this.ingChanged.next(this.ingredients.slice())
  }
}
