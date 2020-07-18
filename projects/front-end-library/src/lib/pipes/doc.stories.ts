import { DocPipe } from './uppercase.pipe';

export default {
    title: 'Pipes/Uppercase',
    component: DocPipe,
};

const modules = {
  declarations: [DocPipe],
};

export const Default = (args) => ({
    moduleMetadata: modules,
    template: `<div><h1>{{ text | docPipe }}</h1></div>`,
    props: args,
});
Default.args = { text: 'uppercase pipe' };