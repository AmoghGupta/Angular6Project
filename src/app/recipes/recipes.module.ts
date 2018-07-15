import { NgModule } from "../../../node_modules/@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { ReactiveFormsModule } from "../../../node_modules/@angular/forms";
import { CommonModule } from "../../../node_modules/@angular/common";
import { RecipeRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

// This is a feature module which we are creating
// Moving Services should generally be avoided and shouldn't be moved to feature module
// you cannot duplicate (components ,pipes or directives) declarations  to multiple modules,
// they can be added only in one module
// but you can add same module in modules, you can provide same service in modules
// when we create a feature module we have to move its routes also
@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule, // always remember common module needs to be added to feature modules
        RecipeRoutingModule,
        SharedModule
    ]
})
export class RecipesModule{
    
}