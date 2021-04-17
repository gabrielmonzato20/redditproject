import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { CreateSubrreditComponent } from './subrredit/create-subrredit/create-subrredit.component';
import { LisSubRedditComponent } from './subrredit/lis-sub-reddit/lis-sub-reddit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SigupComponent } from './auth/sigup/sigup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"sign-up",component:SigupComponent},
  {path:"login",component:LoginComponent},
  {path:"list-subrredit",component:LisSubRedditComponent},
  {path:"create-subrredit",component:CreateSubrreditComponent},
  {path:'create-post',component:CreatePostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
