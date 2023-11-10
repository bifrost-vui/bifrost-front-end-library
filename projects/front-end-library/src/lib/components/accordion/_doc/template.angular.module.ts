import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { AccordionTemplateComponent }   from './template.angular.component';
import { AccordionModule }              from '../angular/accordion.module';

@NgModule({
    declarations: [AccordionTemplateComponent],
    imports: [CommonModule, AccordionModule],
    exports: [AccordionTemplateComponent]
})
export class AccordionTemplateModule { }
