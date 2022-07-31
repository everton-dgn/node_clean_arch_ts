import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { badRequest } from '@src/presentation/helpers/http-helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse | void {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
