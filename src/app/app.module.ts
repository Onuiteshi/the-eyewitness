import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AngularFireModule} from '@angular/fire'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {environment} from '../environments/environment'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';

const routes : Routes = [
  {path:'',redirectTo:'/blog',pathMatch:'full'},
  {path:'',loadChildren:'./posts/posts.module#PostModule'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
