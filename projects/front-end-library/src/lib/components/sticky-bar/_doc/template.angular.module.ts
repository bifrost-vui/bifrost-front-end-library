import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { StickyBarTemplateComponent }   from './template.angular.component';
import { StickyBarModule }              from '../angular/sticky-bar.module';

@NgModule({
    declarations: [StickyBarTemplateComponent],
    imports: [CommonModule, StickyBarModule],
    exports: [StickyBarTemplateComponent]
})
export class StickyBarTemplateModule { }
