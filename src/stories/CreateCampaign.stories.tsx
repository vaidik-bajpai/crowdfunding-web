import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import CreateCampaign from '../component/CreateCampaign';

const meta: Meta<typeof CreateCampaign> = {
    component: CreateCampaign,
};

export default meta;
type Story = StoryObj<typeof CreateCampaign>;

export const Default: Story = {
    render: () => (
        <MemoryRouter>
            <CreateCampaign />
        </MemoryRouter>
    ),
};
