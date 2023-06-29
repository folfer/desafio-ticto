import type { Meta, StoryObj } from '@storybook/react';
import { TransactionsTable } from './TransactionTable';

const meta = {
  title: 'Transaction Table',
  component: TransactionsTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TransactionsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TransactionsTableComponent: Story = {};

