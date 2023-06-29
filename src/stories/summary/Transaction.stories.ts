import type { Meta, StoryObj } from '@storybook/react';
import {Summary} from './Summary'

const meta = {
  title: 'Summary',
  component: Summary,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Summary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SummaryComponent: Story = {};

