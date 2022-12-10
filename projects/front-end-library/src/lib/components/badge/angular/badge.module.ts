import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { IconModule } from '../../icon/angular/icon.module';

@NgModule({
    declarations: [BadgeComponent],
    imports: [CommonModule, IconModule],
    exports: [BadgeComponent],
})
export class BadgeModule {}
