import React from 'react';
import { Card }  from "./Card"

export default {
  component: Card,
  title: 'Example/Card',
};

const Template = (args) => <Card {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: 'this is a label fer now',
};