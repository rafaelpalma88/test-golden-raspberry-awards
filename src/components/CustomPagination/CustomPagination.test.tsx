import { render, screen } from '@testing-library/react'
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
})
