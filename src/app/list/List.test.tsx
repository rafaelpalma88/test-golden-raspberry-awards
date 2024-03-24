import { render, screen } from '@testing-library/react'

import List from './page'
// import { mockMoviesListPage1APIResponse } from '../../../__tests__/mocks/api/mockMoviesListAPIResponse'

// jest.mock('@/services/getMoviesListService', () => ({
//   getMoviesListService: jest
//     .fn()
//     .mockResolvedValue(mockMoviesListPage1APIResponse),
// }))

// resolver essa questão do mock

describe('Page: Movies List', () => {
  it('should render correctly Movies List page', () => {
    render(<List />)
    const winnerLabel = screen.getByText('Winner?')
    expect(winnerLabel).toBeInTheDocument()

    const yesNoLabel = screen.getByText('Yes/No')
    expect(yesNoLabel).toBeInTheDocument()
  })
})
