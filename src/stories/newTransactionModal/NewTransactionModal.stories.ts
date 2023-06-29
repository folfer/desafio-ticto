import type { Meta, StoryObj } from '@storybook/react';
import { NewTransactionModal } from './NewTransactionModal';

const meta = {
  title: 'NewTransactionModal',
  component: NewTransactionModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NewTransactionModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewTransactionModalComponent: Story = {
  args: {
    isOpen: true,
    onRequestClose: () => {}
  },
};

