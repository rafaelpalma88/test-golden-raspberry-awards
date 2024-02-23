import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { YearsWithMultipleWinners } from '.'

describe('Component: YearsWithMultipleWinners', () => {
  it('should render correctly YearsWithMultipleWinners component', () => {
    render(<YearsWithMultipleWinners />)
    expect(1).toBe(1)
  })
})
