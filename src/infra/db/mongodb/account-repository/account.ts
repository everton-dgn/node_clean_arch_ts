import { AddAccountRepository } from '@src/data/protocols'
import { AccountModel } from '@src/domain/models'
import { AddAccountModel } from '@src/domain/usecases'
import { MongoHelper } from '../helpers'

export class AccountMongoRepository implements AddAccountRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = result.ops[0]
    const { _id, ...accountWithoutId } = account
    return Object.assign({}, accountWithoutId, { id: _id })
  }
}
