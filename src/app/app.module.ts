// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
} from '@angular/material';
import { AvatarModule } from 'ngx-avatar';
import { OrderModule } from 'ngx-order-pipe';
import { CountdownModule } from 'ngx-countdown';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      WelcomePageComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AvatarModule,
      OrderModule,
      // Material
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatCardModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
