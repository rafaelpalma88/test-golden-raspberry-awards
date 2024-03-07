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

  it('should render only winner movies', async () => {
    render(<List />)

    screen.debug()

    // const select = screen.getByTestId('select-iswinner')

    // fireEvent.mouseDown(select)

    // screen.debug()

    // const option = await screen.findByText('Yes')
    // fireEvent.click(option)
  })

  it('should render filtered years winner', async () => {
    render(<List />)

    const inputYear = screen.getByPlaceholderText('Filter by year')

    fireEvent.change(inputYear, { target: { value: '2015' } })

    const submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)

    const movieTitle = await screen.findByText('Fantastic Four')
    expect(movieTitle).toBeInTheDocument()
  })
})
