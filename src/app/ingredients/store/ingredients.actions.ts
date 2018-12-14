
import { Action } from '@ngrx/store';

import { Ingredient } from '../ingredient.model';

export const SET_INGREDIENTS = '[Ingredients] Set Ingredients';

export class SetIngredients implements Action {
    readonly type = SET_INGREDIENTS;

    constructor(public payload: Ingredient[]) {}
}

export type IngredientActions =
                SetIngredients;
