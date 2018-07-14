import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { RecipeServices } from "../recipes/recipe.services";
import { Recipe } from "../recipes/recipe.model";
import { AuthFireBaseService } from "../auth/auth-firebase.service";


@Injectable()

export class DataStorageService{
    
    constructor(private http: Http, private recipeService: RecipeServices, private authFirebase: AuthFireBaseService){

    }

    storeRecipes(){
        const token = this.authFirebase.getToken();
       return this.http.put('https://ng-recipe-book-88d38.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
    }

    getRecipes(){
        const token = this.authFirebase.getToken();

        return this.http.get('https://ng-recipe-book-88d38.firebaseio.com/recipes.json?auth='+token).subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}