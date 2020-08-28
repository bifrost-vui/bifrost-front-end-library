import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ButtonModule, AccordionModule } from 'bifrost-front-end-library';
import * as Bifrost from 'bifrost-front-end-library';

// TODO: import a complete LibModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Bifrost.ButtonModule,
    Bifrost.AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
