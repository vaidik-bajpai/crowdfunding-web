import type {Meta, StoryObj} from '@storybook/react';

import Campaign from '../component/Campaign';

const meta: Meta<typeof Campaign> = {
    component: Campaign,
}

export default meta;
type Story = StoryObj<typeof Campaign>;

export const Default: Story = {
    args: {}
}