import { Collection, MongoClient } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

let client: MongoClient
let mongoServer: MongoMemoryServer
export const MongoHelper = {
  async connect(): Promise<void> {
    mongoServer = await MongoMemoryServer.create()
    client = await MongoClient.connect(mongoServer.getUri(), {})
  },

  async disconnect(): Promise<void> {
    await client.close()
  },

  getCollection(name: string): Collection {
    return client.db().collection(name)
  },

  map(collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
