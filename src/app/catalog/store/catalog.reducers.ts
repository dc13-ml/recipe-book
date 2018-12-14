import { CatalogActions, SET_CATALOG } from './catalog.actions';
import { Catalog } from '../catalog.model';
import * as fromRoot from '../../store/app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CatalogState {
    catalog: Catalog[];
    activeCatalog: Catalog;
}

export interface State extends fromRoot.AppState {
    catalog: CatalogState;
}

const initialState: CatalogState = {
    catalog: [],
    activeCatalog: null
};

export function catalogReducer(state = initialState, action: CatalogActions) {
    switch (action.type) {
        case SET_CATALOG:
            return {
                ...state,
                catalog: action.payload
            };
        default:
            return state;
    }
}

export const getCatalogState = createFeatureSelector<CatalogState>('catalog');


export const getCatalog =
        createSelector(
            getCatalogState,
            (state: CatalogState) => state.catalog);
export const getActiveCatalog =
        createSelector(
            getCatalogState,
            (state: CatalogState) => state.activeCatalog);
export const getIsCatalog =
        createSelector(
            getCatalogState,
            (state: CatalogState) => state.activeCatalog !== null);
