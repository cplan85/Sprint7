import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PanelComponent } from './panel/panel.component';

import { BudgetServiceService } from './budget-service.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    WelcomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [BudgetServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
