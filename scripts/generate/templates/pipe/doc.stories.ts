import { %PipeName%Pipe } from './%pipe-name%.pipe';

export default {
    title: 'Pipes/%Pipe-Readable-Name%',
    component: %PipeName%Pipe,
};

const modules = {
  declarations: [%PipeName%Pipe],
};

export const Default = (args) => ({
    moduleMetadata: modules,
    template: `<div><h1>{{ text | %pipeName% }}</h1></div>`,
    props: args,
});
Default.args = { text: '%pipe-name% pipe' };