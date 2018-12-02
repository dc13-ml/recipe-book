import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBBxtCGcDnYTHVc069DPDQNGuk57szmPi4",
    //   authDomain: "ng-recipe-book-d47ff.firebaseapp.com",
    // });
    var config = {
      apiKey: "AIzaSyBBxtCGcDnYTHVc069DPDQNGuk57szmPi4",
      authDomain: "ng-recipe-book-d47ff.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-d47ff.firebaseio.com",
      projectId: "ng-recipe-book-d47ff",
      storageBucket: "ng-recipe-book-d47ff.appspot.com",
      messagingSenderId: "441768045610"
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
