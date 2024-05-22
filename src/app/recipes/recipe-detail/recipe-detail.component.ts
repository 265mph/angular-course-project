import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(
    private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute, 
    private recipeService: RecipesService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    );
  }

  addToShop() {
    this.shoppingListService.addIngs(this.recipe.ingredients)
  }

  editRoute() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
