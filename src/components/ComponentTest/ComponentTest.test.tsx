import { render } from '@testing-library/react'
import { ComponentTest } from '.'

describe('Component: Teste', () => {
  it('should render correctly component Test', () => {
    // POC - Just to test Vitest and RTL environment
    render(<ComponentTest />)
    const sum = 1 + 3
    // TODO: I need to finish this test
    expect(sum).toBe(4)
  })
})
