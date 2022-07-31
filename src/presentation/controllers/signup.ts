import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { badRequest } from '@src/presentation/helpers/http-helpers'
import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | void {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
