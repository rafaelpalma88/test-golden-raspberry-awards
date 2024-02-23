import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Header } from '.'

describe('Component: Header', () => {
  it('should render correctly Header component', () => {
    render(<Header />)
    expect(1).toBe(1)
  })
})
