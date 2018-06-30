import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeServices } from 'app/recipes/recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeItemSelected = new EventEmitter<void>();
  @Input() index: number;
  constructor(private recipeService: RecipeServices) { }

  ngOnInit() {
   
  }

  // onRecipeSelect(){
  //   this.recipeItemSelected.emit();
  // }

  // onRecipeSelect(){
  //   this.recipeService.recipeItemSelected.emit(this.recipe);
  // }

}
