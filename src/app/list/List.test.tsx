import { render, screen, fireEvent } from '@testing-library/react'
import List from './page'

describe('Page: Movies List', () => {
  it('should render correctly Movies List page', () => {
    render(<List />)
    const winnerLabel = screen.getByText('Winner?')
    expect(winnerLabel).toBeInTheDocument()

    const yesNoLabel = screen.getByText('Yes/No')
    expect(yesNoLabel).toBeInTheDocument()
  })
})
