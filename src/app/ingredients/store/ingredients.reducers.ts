import { IngredientActions, SET_INGREDIENTS } from './ingredients.actions';
import { Ingredient } from '../ingredient.model';
import * as fromRoot from '../../store/app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface IngredientState {
    ingredients: Ingredient[];
    activeIngredient: Ingredient;
}

export interface State extends fromRoot.AppState {
    ingredients: IngredientState;
}

const initialState: IngredientState = {
    ingredients: [],
    activeIngredient: null
};

export function ingredientReducer(state = initialState, action: IngredientActions) {
    switch (action.type) {
        case SET_INGREDIENTS:
            console.log('inside SET_INGREDIENTS:');
            return {
                ...state,
                ingredients: action.payload
            };
        default:
            return state;
    }
}

export const getIngredientState = createFeatureSelector<IngredientState>('ingredients');


export const getIngredients =
        createSelector(
            getIngredientState,
            (state: IngredientState) => state.ingredients);
export const getActiveIngredient =
        createSelector(
            getIngredientState,
            (state: IngredientState) => state.activeIngredient);
export const getIsIngredient =
        createSelector(
            getIngredientState,
            (state: IngredientState) => state.activeIngredient !== null);
