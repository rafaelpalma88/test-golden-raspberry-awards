import { fireEvent, render, screen } from '@testing-library/react'

import { CustomPagination } from '.'
import { mockMoviesListPage1APIResponse } from '../../../__tests__/mocks/api/mockMoviesListAPIResponse'

describe('Component: Custom Pagination', () => {
  it('should render correctly custom pagination component', () => {
    const selectedPageMock = 1
    const handleNextPageMock = jest.fn()

    render(
      <CustomPagination
        movies={mockMoviesListPage1APIResponse}
        selectedPage={selectedPageMock}
        handleNextPage={handleNextPageMock}
      />
    )
    const paginationLink1 = screen.getByTestId('pagination-link-1')
    expect(paginationLink1).toBeInTheDocument()

    const paginationLink13 = screen.getByTestId('pagination-link-13')
    expect(paginationLink13).toBeInTheDocument()

    const paginationLink15 = screen.queryByTestId('pagination-link-15')
    expect(paginationLink15).not.toBeInTheDocument()
  })

  it('should call handleNextPage when a pagination link is clicked', () => {
    const handleNextPageMock = jest.fn()
    const selectedPageMock = 1
    const totalPagesMock = 10

    render(
      <CustomPagination
        movies={{
          ...mockMoviesListPage1APIResponse,
          totalPages: totalPagesMock,
        }}
        selectedPage={selectedPageMock}
        handleNextPage={handleNextPageMock}
      />
    )

    const paginationLink2 = screen.getByTestId('pagination-link-2')
    fireEvent.click(paginationLink2)

    expect(handleNextPageMock).toHaveBeenCalledWith(2)
  })
})
