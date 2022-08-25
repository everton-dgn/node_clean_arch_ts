import { AddAccountRepository } from '@src/data/protocols'
import { AccountModel } from '@src/domain/models'
import { AddAccountModel } from '@src/domain/usecases'
import { MongoHelper } from '../helpers'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = { id: result.insertedId.toString(), ...accountData }
    return account
  }
}
