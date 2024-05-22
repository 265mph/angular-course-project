import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/Recipes",
    pathMatch: "full"
  },

  {
    path: "ShoppingList",
    component: ShoppingListComponent
  },

  {
    path: "Recipes",
    component: RecipesComponent,
    children: [
      {
        path: "",
        component: SelectRecipeComponent
      },

      {
        path: "new",
        component: EditRecipeComponent
      },
      
      {
        path: ":id",
        component: RecipeDetailComponent
      },

      {
        path: ":id/edit",
        component: EditRecipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
