import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '',
    component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  } ,
  {
    path: 'home',
    component: HomeComponent,
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
