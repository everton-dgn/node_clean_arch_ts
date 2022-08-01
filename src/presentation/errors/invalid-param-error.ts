export class InvalidParamError extends Error {
  constructor(readonly field: string) {
    super(`Invalid param: ${field}`)
    this.name = 'InvalidParamError'
  }
}
