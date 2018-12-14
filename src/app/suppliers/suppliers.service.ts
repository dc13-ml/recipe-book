import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Supplier } from './supplier.model';
import * as fromSupplier from './store/suppliers.reducers';
import * as fromSupplierActions from './store/suppliers.actions';


@Injectable()
export class SupplierService {
    private fbSubs: Subscription[] = [];

    constructor(private db: AngularFirestore,
                private store: Store<fromSupplier.State>) {}

    getSuppliers() {
        this.fbSubs.push(this.db
            .collection('suppliers')
            .valueChanges()
            .subscribe((suppliers: Supplier[]) => {
                this.store.dispatch(new fromSupplierActions.SetSuppliers(suppliers));
            }, error => {
                console.log(error);
            }));
    }
}
