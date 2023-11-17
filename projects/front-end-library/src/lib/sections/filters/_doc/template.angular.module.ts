import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FiltersTemplateComponent }   from './template.angular.component';
import { FiltersModule }              from '../angular/filters.module';

@NgModule({
    declarations: [FiltersTemplateComponent],
    imports: [CommonModule, FiltersModule],
    exports: [FiltersTemplateComponent]
})
export class FiltersTemplateModule { }
