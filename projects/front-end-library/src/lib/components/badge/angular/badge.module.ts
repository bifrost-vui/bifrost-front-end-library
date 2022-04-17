import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { BadgeComponent }   from './badge.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [BadgeComponent],
    imports: [CommonModule, BrowserModule],
    exports: [BadgeComponent]
})
export class BadgeModule { }