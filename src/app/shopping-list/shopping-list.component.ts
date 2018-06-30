import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 
})
export class ShoppingListComponent implements OnInit {
  newItem: Ingredient;
  ingredients: Ingredient[];
  private subscription: Subscription;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestro(){
    // unsubscribe to prevent any memory leaks
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }


  

}