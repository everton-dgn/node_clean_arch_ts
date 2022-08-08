import { InvalidParamError, MissingParamError } from '@src/presentation/errors'
import { badRequest, serverError, ok } from '@src/presentation/helpers'
import {
  AddAccount,
  Controller,
  EmailValidator,
  HttpRequest,
  HttpResponse
} from './signup-protocols'

export class SignUpController implements Controller {
  readonly #emailValidator: EmailValidator
  readonly #addAccount: AddAccount

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.#emailValidator = emailValidator
    this.#addAccount = addAccount
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation'
      ]
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.#emailValidator.isValid(email)
      if (!isValid) return badRequest(new InvalidParamError('email'))
      const account = await this.#addAccount.add({ name, email, password })
      return ok(account)
    } catch (error) {
      return serverError()
    }
  }
}
