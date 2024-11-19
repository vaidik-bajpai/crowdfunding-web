import type {Meta, StoryObj} from '@storybook/react';
import campaignimage from "../assets/campaign.avif";

import CampaignCard from '../component/CampaignCard';

const meta: Meta<typeof CampaignCard> = {
    component: CampaignCard,
}

export default meta;
type Story = StoryObj<typeof CampaignCard>;

export const Default: Story = {
    args: {
        id: 5,
        campaignTitle: "Animal Rescue Fund",
        description: "Contribute to the rescue and care of abandoned animals.",
        target: 8000,
        deadline: 1683033600,
        image: campaignimage,
        amountCollected: 3000
    }
}