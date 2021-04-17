import { TokenInterception } from './token-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigupComponent } from './auth/sigup/sigup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { PostTitleComponent } from './shared/post-title/post-title.component';
import { VoteComponent } from './shared/vote/vote.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubrreditSideBarComponent } from './shared/subrredit-side-bar/subrredit-side-bar.component';
import { CreateSubrreditComponent } from './subrredit/create-subrredit/create-subrredit.component';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { LisSubRedditComponent } from './subrredit/lis-sub-reddit/lis-sub-reddit.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigupComponent,
    LoginComponent,
    HomeComponent,
    PostTitleComponent,
    VoteComponent,
    SideBarComponent,
    SubrreditSideBarComponent,
    CreateSubrreditComponent,
    CreatePostsComponent,
    LisSubRedditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterception,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
