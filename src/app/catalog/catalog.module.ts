import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { StoreModule } from '@ngrx/store';
import { catalogReducer } from './store/catalog.reducers';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CatalogRoutingModule,
    StoreModule.forFeature('catalog', catalogReducer)
  ]
})
export class CatalogModule { }
