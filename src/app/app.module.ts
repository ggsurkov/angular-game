import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameStatusService} from './global-services/game-status.service';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-Y8PJE5YLP3'),
  ],
  providers: [GameStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
