
import { Action } from '@ngrx/store';

import { Catalog } from '../catalog.model';

export const SET_CATALOG = '[Catalog] Set Catalog';

export class SetCatalog implements Action {
    readonly type = SET_CATALOG;

    constructor(public payload: Catalog[]) {}
}

export type CatalogActions =
                SetCatalog;
