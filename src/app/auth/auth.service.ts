import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/auth.reducers';
import * as UI from '../shared/ui.actions';

@Injectable()
export class AuthService {

    constructor(private router: Router,
                private auth: AngularFireAuth,
                private uiService: UIService,
                private store: Store<fromRoot.State>) {}

    // initAuthListener() {
    //     this.auth.authState
    //         .subscribe(user => {
    //             if (user) {
    //                 this.store.dispatch(new Auth.SetAuthenticated());
    //                 this.router.navigate(['/training']);
    //             } else {
    //                 this.trainingService.cancelSubscriptions();
    //                 this.store.dispatch(new Auth.SetUnauthenticated());
    //                 this.router.navigate(['/login']);
    //             }
    //         });
    // }

    registerUser(authData: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.auth.auth.createUserWithEmailAndPassword(
            authData.email, authData.password
        ).then(result => {
            this.store.dispatch(new UI.StopLoading());
        })
        .catch(error => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(error.message, null, 3000);
        });
    }

    login(authData: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.auth.auth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            this.store.dispatch(new UI.StopLoading());
        })
        .catch(error => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(error.message, null, 3000);
        });
    }

    logout() {
        this.auth.auth.signOut();
    }
}
