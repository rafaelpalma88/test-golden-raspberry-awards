import { render, screen } from '@testing-library/react'
import { WinnerByYear } from '.'

describe('Component: WinnerByYear', () => {
  it('should render correctly WinnerByYear component', () => {
    render(<WinnerByYear />)
    const titleText = screen.getByText('List movie winners by year')
    expect(titleText).toBeInTheDocument()
  })
})
