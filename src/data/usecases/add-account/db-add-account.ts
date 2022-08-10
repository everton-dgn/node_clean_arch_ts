import { Encrypter } from '@src/data/protocols'
import { AddAccount, AddAccountModel } from '@src/domain/usecases'
import { AccountModel } from '@src/domain/models'

export class DbAddAccount implements AddAccount {
  constructor(private readonly encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return Promise.resolve(null)
  }
}
