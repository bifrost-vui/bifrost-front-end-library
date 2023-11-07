import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ChipTemplateComponent }   from './template.angular.component';
import { ChipModule }              from '../angular/chip.module';

@NgModule({
    declarations: [ChipTemplateComponent],
    imports: [CommonModule, ChipModule],
    exports: [ChipTemplateComponent]
})
export class ChipTemplateModule { }
