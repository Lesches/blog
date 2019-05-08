import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsComponent } from './view/main/posts/posts.component';
import { PostComponent } from './view/main/post/post.component';
import { NotFoundComponent } from './view/main/not-found/not-found.component';
import {StubPipe} from './controller/stub.pipe';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NotFoundComponent,
    StubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
