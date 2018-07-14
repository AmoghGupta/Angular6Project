import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // one of the ways to get references to DOM 
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  
  // @Output() ingredientAdded  = new EventEmitter<Ingredient>();
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription =this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredientByIndex(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );

  }
  
  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   // this.ingredientAdded.emit(newIngredient); 
  //   this.slService.addIngredient(newIngredient);
  // }

  // handling through forms
  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }
  

  ngOnDestroy(){

  }



}
