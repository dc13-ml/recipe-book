import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as UiActions from '../../shared/ui.actions';
import * as fromApp from '../../store/app.reducers';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    @Effect()
    // note: the $ at the end of actions signifies that it is an Observable.
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .pipe(
            map((action: AuthActions.TrySignup) => {
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string}) => {
                this.store.dispatch(new UiActions.StartLoading());
                return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token: string) => {
                this.store.dispatch(new UiActions.StopLoading());
                return [
                    {
                        type: AuthActions.SIGNUP
                    }, {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ];
            }));


    @Effect()
    authSigin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .pipe(
            map((action: AuthActions.TrySignin) => {
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string}) => {
                this.store.dispatch(new UiActions.StartLoading());
                return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token: string) => {
                this.router.navigate(['/recipes']);
                this.store.dispatch(new UiActions.StopLoading());
                return [
                    {
                        type: AuthActions.SIGNIN
                    }, {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ];
            }));

    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .pipe(tap(() => {
            this.router.navigate(['/']);
        }));

    constructor(private actions$: Actions,
                private router: Router,
                private store: Store<fromApp.AppState>) {
    }
}
