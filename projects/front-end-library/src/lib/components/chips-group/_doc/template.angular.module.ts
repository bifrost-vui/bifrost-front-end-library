import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ChipsGroupTemplateComponent }   from './template.angular.component';
import { ChipsGroupModule }              from '../angular/chips-group.module';

@NgModule({
    declarations: [ChipsGroupTemplateComponent],
    imports: [CommonModule, ChipsGroupModule],
    exports: [ChipsGroupTemplateComponent]
})
export class ChipsGroupTemplateModule { }
