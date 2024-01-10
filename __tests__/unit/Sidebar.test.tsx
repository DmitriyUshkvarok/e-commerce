import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Sidebar from '@/src/Components/Sidebar/Sidebar';

describe('Sidebar Unit Tests', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const mockOnCategoryClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <Sidebar
        categories={categories}
        loading={false}
        selectedCategory={null}
        onCategoryClick={mockOnCategoryClick}
      />
    );
  });

  it('renders error message when there is an error', () => {
    render(
      <Sidebar
        categories={[]}
        loading={false}
        error="Some error message"
        selectedCategory={null}
        onCategoryClick={mockOnCategoryClick}
      />
    );

    const errorElement = screen.getByText(/error fetching categories/i);
    expect(errorElement).toBeInTheDocument();
  });

  it('handles category click correctly', () => {
    render(
      <Sidebar
        categories={categories}
        loading={false}
        selectedCategory={null}
        onCategoryClick={mockOnCategoryClick}
      />
    );

    const categoryItem = screen.getByText('Category 1');
    fireEvent.click(categoryItem);

    expect(mockOnCategoryClick).toHaveBeenCalledWith('Category 1');
  });
});
