import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { BadgeModule }          from '@videotron-ui/bifrost-front-end-library';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BadgeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
