import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild ('f') shoppingListForm!: NgForm

  editMode = false;
  editedIng!: Ingredient;
  ingIndex!: number;
  subscription!: Subscription

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editingIng.subscribe(
      (index: number) => {
        this.editMode = true;
        this.ingIndex = index;
        this.editedIng = this.shoppingListService.getEditIng(index);
        this.shoppingListForm.setValue({
          name: this.editedIng.name,
          amount: this.editedIng.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    
    if(this.editMode) {
      this.shoppingListService.updateIng(this.ingIndex, newIngredient);
    } else {
      this.shoppingListService.addIng(newIngredient)
    }
    
    this.editMode = false;
    form.reset();
  }

  clearForm() {
    this.shoppingListForm.reset();
    this.editMode = false
  }

  onDelete() {
    this.clearForm();
    this.shoppingListService.deleteIng(this.ingIndex)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
