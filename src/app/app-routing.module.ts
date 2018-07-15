import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthGuard } from "./auth-guard.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { HomeComponent } from "./home/home.component";
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        // we are lazily loading the recipes module i.e only when the recipes path is visited
        // then only the recipes modules is compiled and loaded
        path: 'recipes',
        loadChildren: './recipes/recipes.module#RecipesModule'
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        canActivate:[AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}