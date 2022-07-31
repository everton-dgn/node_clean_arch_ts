import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { badRequest } from '@src/presentation/helpers/http-helpers'
import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | void {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
