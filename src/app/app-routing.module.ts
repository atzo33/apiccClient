import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { MyInfoComponent } from './pages/my-info/my-info.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';
import { NewPostGroupComponent } from './pages/new-post-group/new-post-group.component';
import { PendingRequestsComponent } from './pages/pending-requests/pending-requests.component';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { NewCommentComponent } from './pages/new-comment/new-comment.component';

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
  } ,
  {
    path: 'groups',
    component: GroupsComponent,
  } ,
  {
    path: 'new-group',
    component: NewGroupComponent,
  } ,
  {
    path: 'groups/:id',
    component: GroupDetailsComponent,
  } ,
  {
    path: 'groups/:id',
    component: GroupDetailsComponent,
  } ,
  {
    path: 'new-post/:id',
    component: NewPostGroupComponent,
  } ,
  {
    path: 'pending-requests/:id',
    component: PendingRequestsComponent,
  } ,
  {
    path: 'my-groups',
    component: MyGroupsComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'new-comment/:id',
    component: NewCommentComponent,
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
