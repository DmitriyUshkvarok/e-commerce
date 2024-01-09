import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/src/Components/ui/Buttons/Button';

describe('Button Component', () => {
  it('renders button correctly', () => {
    render(
      <Button onClick={() => {}} disabled={false}>
        Click me
      </Button>
    );

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock} disabled={false}>
        Click me
      </Button>
    );

    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Button onClick={() => {}} disabled={true}>
        Click me
      </Button>
    );

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });
});
