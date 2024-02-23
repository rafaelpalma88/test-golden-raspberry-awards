import { fireEvent, render, screen } from '@testing-library/react'
import { CustomPagination } from '.'
import { moviesMock } from '@/tests/mocks/moviesMock'

describe('Component: Custom Pagination', () => {
  it('should render correctly custom pagination component', () => {
    const selectedPageMock = 1
    const handleNextPageMock = jest.fn()

    render(
      <CustomPagination
        movies={moviesMock}
        selectedPage={selectedPageMock}
        handleNextPage={handleNextPageMock}
      />
    )
    const paginationLink1 = screen.getByTestId('pagination-link-1')
    expect(paginationLink1).toBeInTheDocument()

    const paginationLink13 = screen.getByTestId('pagination-link-13')
    expect(paginationLink13).toBeInTheDocument()

    const paginationLink14 = screen.queryByTestId('pagination-link-14')
    expect(paginationLink14).not.toBeInTheDocument()
  })

  it('should call handleNextPage when a pagination link is clicked', () => {
    const handleNextPageMock = jest.fn()
    const selectedPageMock = 1
    const totalPagesMock = 10 // Total number of pages in your mock data

    render(
      <CustomPagination
        movies={{ ...moviesMock, totalPages: totalPagesMock }} // Mocking the movies prop
        selectedPage={selectedPageMock}
        handleNextPage={handleNextPageMock}
      />
    )

    // Simulate a click on pagination link with page number 2
    const paginationLink2 = screen.getByTestId('pagination-link-2')
    fireEvent.click(paginationLink2)

    // Assert that handleNextPage was called with the correct page number
    expect(handleNextPageMock).toHaveBeenCalledWith(2)
  })
})
