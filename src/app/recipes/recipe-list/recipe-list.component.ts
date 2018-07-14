import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
 

    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[])=>{
          this.recipes = recipes;
      }
    )

    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    // navigating programmitcally
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  // onRecipeItemSelected(recipe: Recipe){
  //   console.log(recipe);
  //   this.recipeWasSelected.emit(recipe);
  // }
  

  
}
