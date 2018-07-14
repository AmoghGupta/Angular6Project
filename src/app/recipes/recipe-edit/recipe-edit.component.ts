import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeServices } from '../recipe.services';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private rPService:RecipeServices, private router: Router ) { }

private initForm(){
    
    let recipeName='';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.rPService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription= recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup(
      {
        "name" : new FormControl(recipeName, Validators.required),
        'imagePath':  new FormControl(recipeImagePath, Validators.required),
        "description": new FormControl(recipeDescription, Validators.required),
        "ingredients" : recipeIngredients
      }
    );
  }


  ngOnInit() {
    // subscribing to params (more dynamic)
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id']!=null;
        this.initForm();
      }
    );
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

   

  onSubmit(){
    // const newRecipe =  new Recipe(this.recipeForm.value['name'],
    //  this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],
    // this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.rPService.updateRecipes(this.id, this.recipeForm.value);
    }else{
      this.rPService.addRecipes(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
