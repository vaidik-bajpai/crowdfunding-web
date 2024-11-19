import type { Meta, StoryObj } from '@storybook/react';
import {FormInput} from '../component/FormInput'; // Make sure to import the interface
import { useState } from 'react';

const meta: Meta<typeof FormInput> = {
    component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState(""); // Initialize state for input value
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValue(e.target.value); // Update the state with the input value
        };

        return (
            <FormInput
                name="Campaign Name"
                placeholder="Enter your campaign name"
                type="text"
                onChange={handleChange} // Pass the combined onChange function
                value={value} // Pass the state value here
            />
        );
    },
};
