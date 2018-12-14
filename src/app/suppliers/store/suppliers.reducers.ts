import { Supplier } from '../supplier.model';
import * as fromRoot from '../../store/app.reducers';
import { SupplierActions, SET_SUPPLIERS } from './suppliers.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SupplierState {
    suppliers: Supplier[];
    activeSupplier: Supplier;
}

export interface State extends fromRoot.AppState {
    suppliers: SupplierState;
}

const initialState: SupplierState = {
    suppliers: [],
    activeSupplier: null
};

export function supplierReducer(state = initialState, action: SupplierActions) {
    switch (action.type) {
        case SET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload
            };
        default:
            return state;
    }
}


export const getSupplierState = createFeatureSelector<SupplierState>('suppliers');


export const getSuppliers =
        createSelector(
            getSupplierState,
            (state: SupplierState) => state.suppliers);
export const getActiveSupplier =
        createSelector(
            getSupplierState,
            (state: SupplierState) => state.activeSupplier);
export const getIsSupplier =
        createSelector(
            getSupplierState,
            (state: SupplierState) => state.activeSupplier !== null);
