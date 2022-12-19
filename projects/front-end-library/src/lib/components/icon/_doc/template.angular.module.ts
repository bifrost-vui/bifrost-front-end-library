import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTemplateComponent } from './template.angular.component';
import { IconModule } from '../angular/icon.module';

@NgModule({
    declarations: [IconTemplateComponent],
    imports: [CommonModule, IconModule],
    exports: [IconTemplateComponent],
})
export class IconTemplateModule {}
