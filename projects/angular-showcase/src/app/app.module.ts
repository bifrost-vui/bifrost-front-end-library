import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Bifrost from 'bifrost-front-end-library';

// TODO: import a complete LibModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Bifrost.AccordionModule,
    Bifrost.ButtonModule,
    Bifrost.IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
