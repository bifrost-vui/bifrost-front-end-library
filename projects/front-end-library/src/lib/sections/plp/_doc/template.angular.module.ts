import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { PlpTemplateComponent }   from './template.angular.component';
import { PlpModule }              from '../angular/plp.module';

@NgModule({
    declarations: [PlpTemplateComponent],
    imports: [CommonModule, PlpModule],
    exports: [PlpTemplateComponent]
})
export class PlpTemplateModule { }
