import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import List from './page'

describe('Page: Movies List', () => {
  it('should render correctly Movies List page', () => {
    render(<List />)
    // TODO: I need to finish this test
    expect(1).toBe(1)
  })
})
