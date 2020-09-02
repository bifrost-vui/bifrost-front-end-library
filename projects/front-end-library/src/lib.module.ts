import { NgModule } from '@angular/core';
import { ButtonModule } from './lib/components/button/angular/button.module';
// import { ButtonComponent } from './lib/components/button/angular/button.component';
import { AccordionModule } from './lib/components/accordion/angular/accordion.module';
// import { AccordionComponent } from './lib/components/accordion/angular/accordion.component';

@NgModule({
  declarations: [ButtonModule, AccordionModule],
  imports: [
  ],
  exports: [ButtonModule, AccordionModule],
})
export class LibModule { }
