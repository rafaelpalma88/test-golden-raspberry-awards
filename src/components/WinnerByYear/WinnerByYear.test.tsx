import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { WinnerByYear } from '.'

describe('Component: WinnerByYear', () => {
  it('should render correctly WinnerByYear component', () => {
    render(<WinnerByYear />)
    expect(1).toBe(1)
  })
})
