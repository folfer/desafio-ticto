import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./index";

describe('Header', () => {
  test('renders component correctly', () => {
    const onOpenNewTransactionModal = jest.fn();
    render(<Header onOpenNewTransactionModal={onOpenNewTransactionModal} />);
    
    const logoElement = screen.getByAltText('ticto');
    expect(logoElement).toBeInTheDocument();
    
    const buttonElement = screen.getByRole('button', { name: /nova transação/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onOpenNewTransactionModal when button is clicked', () => {
    const onOpenNewTransactionModal = jest.fn();
    render(<Header onOpenNewTransactionModal={onOpenNewTransactionModal} />);
    
    const buttonElement = screen.getByRole('button', { name: /nova transação/i });
    fireEvent.click(buttonElement);
    
    expect(onOpenNewTransactionModal).toHaveBeenCalledTimes(1);
  });
});
