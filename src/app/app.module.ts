import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoIntelComponent } from './repo-intel/repo-intel.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipe } from './date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoIntelComponent,
    HomeComponent,
    HighlightDirective,
    DatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
