// import React from 'react';

// import { ButtonComponent } from './button/angular/button.component';
import twig from './test.html.twig';

export default {
  title: 'Components/Twig',
  component: twig(),
};

export const yoo = (a) => twig(a);
console.log('yoo', yoo);

export const Empty = () => ({
  template: `
        <div style="padding: 3rem">
          <div [innerHTML]="twig()"></div> 
        </div>
      `,
});