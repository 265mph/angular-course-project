import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza', 
      'Pepperoni Pizza with Cheese', 
      'https://www.iheartnaptime.net/wp-content/uploads/2023/04/Pepperoni-pizza.jpg',
      [
        new Ingredient ('Cheese', 2),
        new Ingredient ('Pepperoni', 2)
      ]
    ),

    new Recipe(
      'Burger', 
      'Hamburger', 
      'https://www.allrecipes.com/thmb/_OKqViGmlNaa9GV_c4cpwpwApGk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg',
      [
        new Ingredient ('Buns', 2),
        new Ingredient ('Pickles', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number){
    return this.recipes[index]
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }
}
