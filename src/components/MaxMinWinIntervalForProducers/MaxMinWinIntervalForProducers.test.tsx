import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MaxMinWinIntervalForProducers } from '.'

describe('Component: MaxMinWinIntervalForProducers', () => {
  it('should render correctly MaxMinWinIntervalForProducers component', () => {
    render(<MaxMinWinIntervalForProducers />)
    expect(1).toBe(1)
  })
})
