import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BadgeTemplateComponent }   from './template.angular.component';
import { BadgeModule }              from '../angular/badge.module';

@NgModule({
    declarations: [BadgeTemplateComponent],
    imports: [CommonModule, BadgeModule],
    exports: [BadgeTemplateComponent]
})
export class BadgeTemplateModule { }
