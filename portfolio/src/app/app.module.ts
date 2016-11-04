import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import * as firebase from 'firebase';
import { FirebaseServiceService } from './shared/services/firebase-service.service';
import { WebdevComponent } from './webdev/webdev.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { CookingComponent } from './cooking/cooking.component';
import { MusicComponent } from './music/music.component';
import { TwojaStaraComponent } from './twoja-stara/twoja-stara.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyB9NM74peTUcEEYeDXuxizc_NOItPscLeI',
  authDomain: 'portfolio-3f3e9.firebaseapp.com',
  databaseURL: 'https://portfolio-3f3e9.firebaseio.com',
  storageBucket: 'portfolio-3f3e9.appspot.com'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    PageNotFoundComponent,
    WebdevComponent,
    CookingComponent,
    MusicComponent,
    TwojaStaraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    FirebaseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
