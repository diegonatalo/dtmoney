import { TransactionsReducer } from '@/reducers/TransactionsReducer'
import { createTransactionAction } from '@/reducers/TransactionsReducer/actions'
import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Transaction } from '../@types/Transaction'

interface TransactionsContextData {
  transactionsState: Transaction[]
  createTransaction: (transaction: Transaction) => void
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

const TRANSACTIONS_STORAGE_KEY = 'dtMoney:transactions'

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactionsState, dispatch] = useReducer(
    TransactionsReducer,
    [],
    () => {
      const storedTransactions = localStorage.getItem(TRANSACTIONS_STORAGE_KEY)

      if (storedTransactions) {
        return JSON.parse(storedTransactions)
      }

      return []
    }
  )

  useEffect(() => {
    localStorage.setItem(
      TRANSACTIONS_STORAGE_KEY,
      JSON.stringify(transactionsState)
    )
  }, [transactionsState])

  function createTransaction(transaction: Transaction) {
    dispatch(createTransactionAction(transaction))
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactionsState,
        createTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
