import type {Meta, StoryObj} from '@storybook/react';

import Header from '../component/Header';

const meta: Meta<typeof Header> = {
    component: Header,
}

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {}
}