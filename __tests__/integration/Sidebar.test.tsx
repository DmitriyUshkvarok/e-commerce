import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import Sidebar from '@/src/Components/Sidebar/Sidebar';

describe('Sidebar Integration Tests', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const mockOnCategoryClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories correctly', () => {
    render(
      <Sidebar
        categories={categories}
        loading={false}
        selectedCategory={null}
        onCategoryClick={mockOnCategoryClick}
      />
    );

    const categoryItems = screen.getAllByTestId(/category-item-.*/);
    expect(categoryItems).toHaveLength(categories.length);
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

    const categoryItem = screen.getByTestId('category-item-Category 1');
    fireEvent.click(categoryItem);

    expect(mockOnCategoryClick).toHaveBeenCalledWith('Category 1');
  });

  it('displays loading state correctly', () => {
    render(
      <Sidebar
        categories={categories}
        loading={true}
        selectedCategory={null}
        onCategoryClick={mockOnCategoryClick}
      />
    );

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('displays error state correctly', () => {
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
});
