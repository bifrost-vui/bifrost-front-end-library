import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FilterTemplateComponent }   from './template.angular.component';
import { FilterModule }              from '../angular/filter.module';

@NgModule({
    declarations: [FilterTemplateComponent],
    imports: [CommonModule, FilterModule],
    exports: [FilterTemplateComponent]
})
export class FilterTemplateModule { }
