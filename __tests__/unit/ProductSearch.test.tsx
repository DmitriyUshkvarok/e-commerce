import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductSearch from '@/src/Components/ui/SearchProduct/SearchProduct';

describe('ProductSearch', () => {
  it('should render without errors', () => {
    render(<ProductSearch onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText('пошук продуктів...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update search query on input change', () => {
    const onSearchMock = jest.fn();
    render(<ProductSearch onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('пошук продуктів...');

    fireEvent.change(inputElement, { target: { value: 'apple' } });

    expect(onSearchMock).toHaveBeenCalledWith('apple');
  });

  it('should clear search query on empty input', () => {
    const onSearchMock = jest.fn();
    render(<ProductSearch onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('пошук продуктів...');

    fireEvent.change(inputElement, { target: { value: 'banana' } });
    fireEvent.change(inputElement, { target: { value: '' } });

    expect(onSearchMock).toHaveBeenCalledWith('');
  });
});
