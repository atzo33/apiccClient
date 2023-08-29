import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor/token.interceptor';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileNavBarComponent } from './components/profile-nav-bar/profile-nav-bar.component';

import { MyInfoComponent } from './pages/my-info/my-info.component';
import { PostComponent } from './components/post/post.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupsNavBarComponent } from './components/groups-nav-bar/groups-nav-bar.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { OneGroupComponent } from './components/one-group/one-group.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    NewPostComponent,
    ProfileComponent,
    ProfileNavBarComponent,
    MyInfoComponent,
    PostComponent,
    ChangePasswordComponent,
    ReactionsComponent,
    GroupsComponent,
    GroupsNavBarComponent,
    NewGroupComponent,
    OneGroupComponent,
    GroupDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
