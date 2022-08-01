import { AccountModel } from '@src/domain/models'

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add(account: AddAccountModel): Promise<AccountModel>
}
