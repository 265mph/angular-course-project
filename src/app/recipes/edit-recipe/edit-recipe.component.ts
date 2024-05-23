import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) {  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.editMode = params["id"] != null;
        this.initForm();
      }
    )
  }
  
  private initForm() {
    let recipeName = "";
    let recipeImgPath = "";
    let recipeDesc = "";

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDesc = recipe.description;
    }

    this.recipeForm = new FormGroup ({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImgPath),
      'desc': new FormControl(recipeDesc)
    })
  }

  onSubmit() {
    console.log(this.recipeForm)
  }
}
