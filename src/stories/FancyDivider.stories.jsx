import React from 'react';
import { FancyDivider }  from './FancyDivider'

export default {
  title: 'Example/FancyDivider',
  component: FancyDivider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <FancyDivider {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  label: 'change this to square size in css somehow',
};