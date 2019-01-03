import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppiComponent } from './appi/appi.component';
import { AjaiComponent } from './ajai/ajai.component';

@NgModule({
  declarations: [
    AppComponent,
    AppiComponent,
    AjaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
