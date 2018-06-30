import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";


@Injectable()
export class RecipeServices{
    recipeItemSelected = new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService:ShoppingListService){

    }

    private recipes: Recipe[]=[
        new Recipe("Test Recipe 1", "Simply a test recipe 1", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNI_Weof_I1JpKdBVrRK-nXQapuDXX7omOueevK7DVNDFSuyRvQ",
    [
        new Ingredient('Meat',1),
        new Ingredient('French fries',10)
    
    ]),
        new Recipe("Test Recipe 2", "Simply a test recipe 2", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNI_Weof_I1JpKdBVrRK-nXQapuDXX7omOueevK7DVNDFSuyRvQ",
    [
        
            new Ingredient('Buns',2),
            new Ingredient('Meat',10)
        
    ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipeById(id: number){
        return this.recipes.slice()[id];    
      }

      addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
      }

      addRecipes(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipes(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
        }


        deleteRecipe(index: number){
            this.recipes.splice(index, 1);
            this.recipesChanged.next(this.recipes.slice());
        }


        setRecipes(recipes: Recipe[]){
            this.recipes = recipes;
            this.recipesChanged.next(this.recipes.slice());
        }
}