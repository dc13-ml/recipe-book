import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';
// import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SharedModule } from '../shared/shared.module';
import { supplierReducer } from './store/suppliers.reducers';

@NgModule({
  declarations: [SuppliersComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuppliersRoutingModule,
    StoreModule.forFeature('suppliers', supplierReducer)
  ]
})
export class SuppliersModule { }
