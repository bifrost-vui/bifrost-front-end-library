import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { BadgeComponent }   from './badge.component';
import { IconModule }       from '../../icon/angular/icon.module';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [BadgeComponent],
    imports: [CommonModule, IconModule, BrowserModule],
    exports: [BadgeComponent]
})
export class BadgeModule { }