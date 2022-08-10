import { Encrypter } from '@src/data/protocols'
import { AccountModel } from '@src/domain/models'
import { AddAccount, AddAccountModel } from '@src/domain/usecases'

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly encrypter: Encrypter,
    private addAccountRepository: AddAccount
  ) {}

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const newAccountData = Object.assign({}, accountData, {
      password: hashedPassword
    })
    return await this.addAccountRepository.add(newAccountData)
  }
}
