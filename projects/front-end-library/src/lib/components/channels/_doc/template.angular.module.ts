import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ChannelsTemplateComponent }   from './template.angular.component';
import { ChannelsModule }              from '../angular/channels.module';

@NgModule({
    declarations: [ChannelsTemplateComponent],
    imports: [CommonModule, ChannelsModule],
    exports: [ChannelsTemplateComponent]
})
export class ChannelsTemplateModule { }
