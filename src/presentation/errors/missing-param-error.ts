export class MissingParamError extends Error {
  constructor(readonly field: string) {
    super(`Missing param: ${field}`)
    this.name = 'MissingParamError'
  }
}
