import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header, HeaderProps } from './Header';
import React from 'react';
import { Button } from '../button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Header',
    component: Header,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<HeaderProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        brand: 'Brand name',
        links: [{
            name: 'Home',
            url: '/home'
        }, {
            name: 'Tasks',
            url: '/tasks'
        }, {
            name: 'Chat',
            url: '/chat'
        }],
        children: (
            <div>
                <Button label="Call to action" onClick={() => { }} className='bg-primary' />
            </div>
        )
    },
};