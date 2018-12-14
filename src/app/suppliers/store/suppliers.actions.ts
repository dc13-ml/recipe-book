import { Action } from '@ngrx/store';

import { Supplier } from '../supplier.model';

export const SET_SUPPLIERS = '[Suppliers] Set Suppliers';

export class SetSuppliers implements Action {
    readonly type = SET_SUPPLIERS;

    constructor(public payload: Supplier[]) {}
}

export type SupplierActions =
                SetSuppliers;
