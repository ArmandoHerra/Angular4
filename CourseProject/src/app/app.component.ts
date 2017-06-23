import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loadedFeature = 'recipe';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDFZ6r1Dd8f2VSzRVpBs3iJvxxw3JvRCQs',
            authDomain: 'ng-courseproject.firebaseapp.com'
        });
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
}
