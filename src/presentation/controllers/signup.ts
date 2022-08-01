import { InvalidParamError } from '@src/presentation/errors/invalid-param-error'
import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { ServerError } from '@src/presentation/errors/server-error'
import { badRequest } from '@src/presentation/helpers/http-helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { EmailValidator } from '@src/presentation/protocols/email-validator'
import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
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
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) return badRequest(new InvalidParamError('email'))
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}
