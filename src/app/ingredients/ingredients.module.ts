import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IngredientsComponent } from './ingredients.component';
import { SharedModule } from './../shared/shared.module';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { ingredientReducer } from './store/ingredients.reducers';

@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    IngredientsRoutingModule,
    StoreModule.forFeature('ingredients', ingredientReducer)
  ]
})
export class IngredientsModule { }
