import { Component, Input} from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem!: Recipe;

  constructor(private recipeService: RecipesService) {  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipeItem)
  }
}
