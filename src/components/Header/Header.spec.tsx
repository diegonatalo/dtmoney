import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Header } from '.'

describe('Header', async () => {
  it('should render the Header', () => {
    const mockFunction = vi.fn()
    render(<Header onOpenNewTransactionModal={mockFunction} />)
    expect(screen.getByText('Nova transação')).toBeInTheDocument()
  })
})
