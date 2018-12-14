import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { Ingredient } from './ingredient.model';
import * as fromIngredient from './store/ingredients.reducers';
import * as fromIngredientActions from './store/ingredients.actions';

@Injectable()
export class IngredientService {
    private fbSubs: Subscription[] = [];

    constructor(private db: AngularFirestore,
                private store: Store<fromIngredient.State>) {}

    getIngredients() {
        this.fbSubs.push(this.db
            .collection('ingredients')
            .valueChanges()
            .subscribe((ingredients: Ingredient[]) => {
                this.store.dispatch(new fromIngredientActions.SetIngredients(ingredients));
            }, error => {
                console.log(error);
            }));
    }
}
