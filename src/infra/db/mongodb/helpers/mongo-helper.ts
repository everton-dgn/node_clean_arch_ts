import { Collection, MongoClient } from 'mongodb'

const url = process.env.MONGO_URL as any

export const MongoHelper = {
  client: null as unknown as MongoClient,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}
