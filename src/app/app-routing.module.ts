import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { MyInfoComponent } from './pages/my-info/my-info.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

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
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  } ,
  {
    path: 'profile',
    component: ProfileComponent,
  },
  
  {
    path: 'my-info',
    component: MyInfoComponent,
  } ,
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
