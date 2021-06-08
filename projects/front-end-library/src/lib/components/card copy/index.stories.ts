import Card from './card.twig';

export default {
  title: 'Twig/Card',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

// const Template = ({ label, ...args }) => {
//   // You can either use a function to create DOM elements or use a plain html string!
//   // return `<div>${label}</div>`;
//   return Card({ label, ...args });
// };

export const Template = (args) => ({    
    template: Card({ ...args }),
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Card#ok',
};