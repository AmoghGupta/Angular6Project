import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { RecipeServices } from "app/recipes/recipe.services";
import { Recipe } from "app/recipes/recipe.model";


@Injectable()

export class DataStorageService{
    
    constructor(private http: Http, private recipeService: RecipeServices){

    }

    storeRecipes(){
       return this.http.put('https://ng-recipe-book-88d38.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes(){
        return this.http.get('https://ng-recipe-book-88d38.firebaseio.com/recipes.json').subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}