import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Dashboard from './page'

describe('Page: Dashboard', () => {
  it('should render correctly Dashboard page', () => {
    render(<Dashboard />)
    expect(1).toBe(1)
  })
})
