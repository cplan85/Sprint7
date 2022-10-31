import { HomeComponent } from './home/home.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: WelcomeScreenComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: WelcomeScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
