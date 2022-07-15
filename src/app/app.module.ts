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
import { QueryParametersService } from './query-parameters.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { InfoIdiomasDialog } from './panel/panel.component';
import { InfoPaginasDialog } from './panel/panel.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SaveInputsComponent } from './save-inputs/save-inputs.component';
import { BudgetFinderComponent } from './budget-finder/budget-finder.component';

import { BindQueryParamDirective } from './bindQueryParam.directive';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { TitleFontComponent } from './title-font/title-font.component';

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
    InfoIdiomasDialog,
    InfoPaginasDialog,
    BudgetListComponent,
    SaveInputsComponent,
    BudgetFinderComponent,
    BindQueryParamDirective,
    DonutChartComponent,
    HighlightTextPipe,
    TitleFontComponent,
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
    NgApexchartsModule,
  ],
  providers: [BudgetServiceService, QueryParametersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
