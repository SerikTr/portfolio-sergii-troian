import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth.interceptor';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAlObHMJrCfszeMcfWpTf2SpNQ7qMq1ZHY',
      authDomain: 'portfolio-sergey-troian.firebaseapp.com',
      databaseURL: 'https://portfolio-sergey-troian-default-rtdb.firebaseio.com',
      projectId: 'portfolio-sergey-troian',
      storageBucket: 'portfolio-sergey-troian.appspot.com',
      messagingSenderId: '377108270187',
      appId: '1:377108270187:web:3fc9492c6d2c5b909cf52e',
      measurementId: 'G-EKNX3X0574'
    }),
    BrowserAnimationsModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
