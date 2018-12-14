import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { Catalog } from './catalog.model';
import * as fromCatalog from './store/catalog.reducers';
import * as fromCatalogActions from './store/catalog.actions';

@Injectable()
export class CatalogService {
    private fbSubs: Subscription[] = [];

    constructor(private db: AngularFirestore,
                private store: Store<fromCatalog.State>) {}

    getCatalog() {
        this.fbSubs.push(this.db
            .collection('catalog')
            .valueChanges()
            .subscribe((catalog: Catalog[]) => {
                this.store.dispatch(new fromCatalogActions.SetCatalog(catalog));
            }, error => {
                console.log(error);
            }));
    }
}
