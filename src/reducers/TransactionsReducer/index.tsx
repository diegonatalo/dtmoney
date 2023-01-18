import { Transaction } from '@/@types/Transaction'
import { produce } from 'immer'
import { ActionTypes } from './actions'

export function TransactionsReducer(transactions: Transaction[], action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_TRANSACTION: {
      return produce(transactions, (draft) => {
        draft.push(action.payload.transaction)
      })
    }

    default:
      return transactions
  }
}
