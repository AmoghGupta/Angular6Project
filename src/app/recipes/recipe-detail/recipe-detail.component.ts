import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeServices } from 'app/recipes/recipe.services';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetail: Recipe;
  recipeDetail: Recipe;
  id: number;
  constructor(private recipeService:RecipeServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // we can get params like this, but this will not update when URL updates hence we use observables
    // const id = this.route.snapshot.params['id'];

    // ActivatedRoute for retreiving route params params
    // route observable
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipeById(this.id);
      }
    );
  }


  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onEditRecipe(){
    // router is used to navigate programmatically
    // ActivatedRoute to be relative to current url
    this.router.navigate(['edit'], {relativeTo:this.route});
    //or another way
    // this.router.navigate(['../', this.id, 'edit']);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
