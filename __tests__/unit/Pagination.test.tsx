import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '@/src/Components/ui/Pagination/Pagination';

jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');
  return {
    ...actual,
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
    usePathname: jest.fn(),
  };
});

describe('Pagination', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors', () => {
    render(
      <Pagination
        totalItems={10}
        itemsPerPage={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );
    const paginationElement = screen.getByTestId('previous-button');
    expect(paginationElement).toBeInTheDocument();
  });

  it('should render correct number of page buttons', () => {
    render(
      <Pagination
        totalItems={20}
        itemsPerPage={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );
    const pageButtons = screen.getAllByTestId(/^page-/);
    expect(pageButtons.length).toBe(4);
  });

  it('should call onPageChange when a page button is clicked', () => {
    render(
      <Pagination
        totalItems={15}
        itemsPerPage={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );
    const pageButton = screen.getByTestId('page-2');
    fireEvent.click(pageButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('should disable "Previous" button on the first page', () => {
    render(
      <Pagination
        totalItems={15}
        itemsPerPage={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );
    const previousButton = screen.getByTestId('previous-button');
    expect(previousButton).toBeDisabled();
  });

  it('should disable "Next" button on the last page', () => {
    render(
      <Pagination
        totalItems={15}
        itemsPerPage={5}
        currentPage={3}
        onPageChange={mockOnPageChange}
      />
    );
    const nextButton = screen.getByTestId('next-button');
    expect(nextButton).toBeDisabled();
  });

  it('should enable "Previous" and "Next" buttons on intermediate pages', () => {
    render(
      <Pagination
        totalItems={20}
        itemsPerPage={5}
        currentPage={2}
        onPageChange={mockOnPageChange}
      />
    );
    const previousButton = screen.getByTestId('previous-button');
    const nextButton = screen.getByTestId('next-button');
    expect(previousButton).toBeEnabled();
    expect(nextButton).toBeEnabled();
  });
});
