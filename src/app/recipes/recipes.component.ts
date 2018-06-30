import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeServices } from 'app/recipes/recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor(private recipeService: RecipeServices) { }

  ngOnInit() {
    this.recipeService.recipeItemSelected.subscribe(
      (recipe)=> {
        this.selectedRecipe = recipe;
      }
    );
  }

 

}
