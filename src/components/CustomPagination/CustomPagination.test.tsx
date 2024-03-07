import { fireEvent, render, screen } from '@testing-library/react'
import { CustomPagination } from '.'
import { moviesMock } from '../../../__tests__/mocks/moviesMock'

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
    const totalPagesMock = 10

    render(
      <CustomPagination
        movies={{ ...moviesMock, totalPages: totalPagesMock }}
        selectedPage={selectedPageMock}
        handleNextPage={handleNextPageMock}
      />
    )

    const paginationLink2 = screen.getByTestId('pagination-link-2')
    fireEvent.click(paginationLink2)

    expect(handleNextPageMock).toHaveBeenCalledWith(2)
  })
})
