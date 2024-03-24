import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('Component: Header', () => {
  it('should render correctly Header component', () => {
    render(<Header />)
    const moviesListButton = screen.getByText('Movies List')
    expect(moviesListButton).toBeInTheDocument()

    const dashboardButton = screen.getByText('Dashboard')
    expect(dashboardButton).toBeInTheDocument()
  })
})
