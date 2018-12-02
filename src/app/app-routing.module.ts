import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent }
]

// 
// PreLoadAllModules instructs Angular to preload all modules right after the
// app is up and running.  But not before which will impact performance.
// Note: this is an effective way of lazy loading. 
// 
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
