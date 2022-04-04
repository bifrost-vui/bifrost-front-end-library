import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { %ComponentName%TemplateComponent }   from './template.angular.component';
import { %ComponentName%Module }              from '../angular/%component-name%.module';

@NgModule({
    declarations: [%ComponentName%TemplateComponent],
    imports: [CommonModule, %ComponentName%Module],
    exports: [%ComponentName%TemplateComponent]
})
export class %ComponentName%TemplateModule { }
