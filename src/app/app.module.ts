import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoIntelComponent } from './repo-intel/repo-intel.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    UserComponent,
    RepoIntelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
