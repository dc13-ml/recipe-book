import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { formattedError } from '@angular/compiler';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    console.log('initialize Sidenav component');
    this.isAuth$ = this.store.select(fromApp.getIsAuth);
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
  }
}
