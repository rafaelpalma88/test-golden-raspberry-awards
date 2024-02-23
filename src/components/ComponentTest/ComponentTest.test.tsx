import React from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { ComponentTest } from '.'

describe('Component: Teste', () => {
  it('should render correctly component Test', () => {
    render(<ComponentTest />)
    expect(1).toBe(1)
  })
})
