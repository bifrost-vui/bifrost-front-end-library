import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HeaderTemplateComponent }   from './template.angular.component';
import { HeaderModule }              from '../angular/header.module';

@NgModule({
    declarations: [HeaderTemplateComponent],
    imports: [CommonModule, HeaderModule],
    exports: [HeaderTemplateComponent]
})
export class HeaderTemplateModule { }
