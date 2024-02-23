import { render, screen } from '@testing-library/react'
import { MaxMinWinIntervalForProducers } from '.'

describe('Component: MaxMinWinIntervalForProducers', () => {
  it('should render correctly MaxMinWinIntervalForProducers component', () => {
    render(<MaxMinWinIntervalForProducers />)

    const componentTitle = screen.getByText(
      'Producers with longest and shortest interval between wins'
    )
    expect(componentTitle).toBeInTheDocument()
  })
})
