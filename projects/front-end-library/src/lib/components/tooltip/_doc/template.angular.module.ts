import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { TooltipTemplateComponent }   from './template.angular.component';
import { TooltipModule }              from '../angular/tooltip.module';

@NgModule({
    declarations: [TooltipTemplateComponent],
    imports: [CommonModule, TooltipModule],
    exports: [TooltipTemplateComponent]
})
export class TooltipTemplateModule { }
