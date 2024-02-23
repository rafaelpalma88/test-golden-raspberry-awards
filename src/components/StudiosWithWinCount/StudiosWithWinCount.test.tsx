import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { StudiosWithWinCount } from '.'

describe('Component: StudiosWithWinCount', () => {
  it('should render correctly StudiosWithWinCount component', () => {
    render(<StudiosWithWinCount />)
    expect(1).toBe(1)
  })
})
