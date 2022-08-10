import { AccountModel } from '@src/domain/models'
import { AddAccountModel } from '@src/domain/usecases'

export interface AddAccountRepository {
  add(accountData: AddAccountModel): Promise<AccountModel>
}
