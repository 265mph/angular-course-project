import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem: {name: string, description: string, imagePath: string};
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
    this.recipeItem = {name: "", description: "", imagePath: ""}
  }

  onSelected(){
    this.recipeSelected.emit()
  }
}
