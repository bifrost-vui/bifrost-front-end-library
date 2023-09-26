import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { GoodToKnowTemplateComponent }   from './template.angular.component';
import { GoodToKnowModule }              from '../angular/good-to-know.module';

@NgModule({
    declarations: [GoodToKnowTemplateComponent],
    imports: [CommonModule, GoodToKnowModule],
    exports: [GoodToKnowTemplateComponent]
})
export class GoodToKnowTemplateModule { }
