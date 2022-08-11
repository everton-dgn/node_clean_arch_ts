import bcrypt from 'bcrypt'
import { BcryptAdapter } from '@src/infra/criptography'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('any_hash')
  }
}))

describe('BcryptAdapter', () => {
  it('should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  it('should return a hash on success', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('any_hash')
  })
})
