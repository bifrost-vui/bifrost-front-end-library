import { UppercasePipe } from './uppercase.pipe';

export default {
    title: 'Pipes/Uppercase',
    component: UppercasePipe,
};

const modules = {
  declarations: [UppercasePipe],
};

export const Default = (args) => ({
    moduleMetadata: modules,
    template: `<div><h1>{{ text | uppercase }}</h1></div>`,
    props: args,
});
Default.args = { text: 'uppercase pipe' };