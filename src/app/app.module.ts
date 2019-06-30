import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,    
    IonicModule.forRoot(),
    AppRoutingModule],    
  providers: [
    StatusBar,
    SplashScreen,
    AuthInterceptorProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AuthGuard,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
