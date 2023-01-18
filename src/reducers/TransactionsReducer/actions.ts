import { Transaction } from '@/@types/Transaction'

export enum ActionTypes {
  CREATE_TRANSACTION = 'CREATE_TRANSACTION'
}

export function createTransactionAction(transaction: Transaction) {
  return {
    type: ActionTypes.CREATE_TRANSACTION,
    payload: { transaction }
  }
}
