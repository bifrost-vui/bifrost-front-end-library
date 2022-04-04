import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';

import { BadgeModule }              from '@videotron-ui/bifrost-front-end-library';
import { BadgeTemplateModule }      from  '../../../front-end-library/src/lib/components/badge/_doc/template.angular.module';

import { IconModule }               from '@videotron-ui/bifrost-front-end-library';
import { IconTemplateModule }       from  '../../../front-end-library/src/lib/components/icon/_doc/template.angular.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BadgeModule,
        BadgeTemplateModule,
        IconModule,
        IconTemplateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
