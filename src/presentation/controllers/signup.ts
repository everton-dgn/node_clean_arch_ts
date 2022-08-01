import { AddAccount } from '@src/domain/usecases'
import { InvalidParamError, MissingParamError } from '@src/presentation/errors'
import { badRequest, serverError } from '@src/presentation/helpers'
import {
  Controller,
  EmailValidator,
  HttpRequest,
  HttpResponse
} from '@src/presentation/protocols'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  handle(httpRequest: HttpRequest): HttpResponse | void {
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
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) return badRequest(new InvalidParamError('email'))
      this.addAccount.add({ name, email, password })
    } catch (error) {
      return serverError()
    }
  }
}
